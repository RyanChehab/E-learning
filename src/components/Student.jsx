import React,{useState,useEffect} from "react";
import axios from "axios";

const StudentsList = ()=>{

    const [students,setStudents] = useState([]);

    // getting the students from db
    const read = async() =>{
        try{
            const response = await axios.post("http://localhost/elearning/src/backend/read.php",{
                user_type: 'student',
            })
            console.log(response.data)
            setStudents(response.data.result)
            // console.log(students)
        }catch(error){
            
            console.error("failed fetch")
        }
    }


    useEffect(() => {
        read(); // Fetch students when mounted
      }, []);

    useEffect(()=>{
       console.log("updated students:",students)
    },[students])
    
    // banning a user
    const banStudent = async (studentId) => {
        try{
            const response = await axios.post("http://localhost/elearning/src/backend/ban.php",{
                "user_id":studentId,
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
            <h2>Students Lists</h2>
            <ul>
                {students.map((student, index) => (
                <li key={index}>
                    {student.id} - {student.email}{" "}
                    <button onClick={() => banStudent(student.user_id)}>{student.banned === 1 ? "Banned" : "Ban"}</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentsList;