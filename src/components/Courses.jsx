import React,{useState,useEffect} from "react";
import axios from "axios";

const CourseList = ()=>{
    const [courses,setCourses] = useState([]);

    const read = async ()=>{
        try{
            const response = await axios.post("http://localhost/elearning/src/backend/read_courses.php",{
                header:{
                    "Content-Type": "application/json",
                } 
            })
            
            setCourses(response.data.result)
        }catch(error){
            error.log("failed to read")
        }
    }
    // calling the api
    useEffect(()=>{
        read();
    },[])
    // updating the course list
    useEffect(()=>{
        console.log("updated courses" , courses)
    },[courses])

    const addCourse = ()=>{
        console.log("working")
    }

return(
    <div>
        <h2>Course List</h2>
        <ul>
            {courses.map((course, index) => (
            <li key={index}>
                {course.title} - {course.description}{" "}
                <button onClick={() => addCourse()}>Add course</button>
            </li>
            ))}
        </ul>
    </div>
)
}
export default CourseList;