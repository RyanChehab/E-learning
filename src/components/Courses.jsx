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

    const addCourse = (id)=>{
        console.log("working", id)
    }
    // state for form input
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    // function for adding courses
    const handleSubmit = ()=>{

    }
return(
    <>
        <div>
            <h2>Course List</h2>
            <br />
            <form onSubmit= {handleSubmit}>
                <label>Title</label>
                <input 
                type="text"
                value={description}
                onChange = {(e)=>{
                    setDescription(e.target.value)
                }}
                
                required
                />
                {" "}
                <label>Description</label>
                <input 
                type="text"
                value={title}
                onChange = {(e)=>{
                    setTitle(e.target.value)
                }}
                required
                />

                <button type="submit">Add Course</button>
                
            </form>

            {/* existing courses */}
            <ul>
                {courses.map((course, index) => (
                <li key={index}>
                    {course.title} - {course.description}{" "}
                    <button onClick={() => addCourse(course.course_id)}>Delete course</button>
                </li>
                ))}
            </ul>
        </div>
    </>
)
}
export default CourseList;