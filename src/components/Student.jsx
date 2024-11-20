import React,{useState,useEffect} from "react";
import axios from "axios";

const Students = ()=>{

    const [students,setStudents] = useState([]);

    const read= async() =>{
        try{
            const response = await axios.post("http://localhost/elearning/src/backend/read.php",{
                user_type: 'student',
            })
            console.log(response.data)
        }catch(erro){
            console.error(response.error)
        }
    }

    useEffect(()=>{
        read();
    },[])
    
    return(
        <div></div>
    )
}

export default Student;