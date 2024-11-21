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

    useEffect(()=>{
        read();
    },[])

    useEffect(()=>{
        console.log("updated courses" , courses)
    },[courses])
}



export default CourseList;