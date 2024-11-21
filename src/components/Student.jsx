import React,{useState,useEffect} from "react";
import axios from "axios";

const StudentsList = ()=>{

    const [students,setStudents] = useState([]);

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
        read(); // Fetch students on component mount
      }, []);

    useEffect(()=>{
       console.log("updated students:",students)
    },[students])

    const banStudent =(studentId) => {
        console.log(`ban student with ID: ${studentId}`)
    }

    return(
        <div>
            <h2>Students Lists</h2>
            <ul>
                {students.map((student, index) => (
                <li key={index}>
                    {student.id} - {student.email}{" "}
                    <button onClick={() => banStudent(student.user_id)}>Ban</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentsList;