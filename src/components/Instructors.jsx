import React,{useState,useEffect} from "react";
import axios from "axios";

const InstructorsList = ()=>{
    const [instructors,setInstructor] = useState([])

    const read = async() =>{
        try{
            const response = await axios.post("http://localhost/elearning/src/backend/read.php",{
                user_type: 'instructor',
            })
            console.log(response.data)
            setInstructor(response.data.result)
            // console.log(students)
        }catch(error){
            
            console.error("failed fetch")
        }
    }

    useEffect(() => {
        read(); // Fetch students when mounted
      }, []);

    useEffect(()=>{
       console.log("updated instructors:",instructors)
    },[instructors])

    // banning a user
    const banStudent = async (instructorId) => {
        try{
            const response = await axios.post("http://localhost/elearning/src/backend/ban.php",{
                "user_id":instructorId,
                header: {
                    "Content-Type": "application/json",
                }
            })
            console.log("done")
    
        }catch(error){
            console.log("user wasnt banned successfully ")
        }
    }

    return(
        <div>
            <h2>Instructors Lists</h2>
            <ul>
                {instructors.map((instructor, index) => (
                <li key={index}>
                    {instructor.id} - {instructor.email}{" "}
                    <button onClick={() => banStudent(instructor.user_id)}>{instructor.banned === 1 ? "Banned" : "Ban"}</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default InstructorsList;