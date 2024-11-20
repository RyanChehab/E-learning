import React,{useState} from "react";
import axios from "axios";

const Students = (){

    const read= async() =>{
        try{
            const response = await axios.post("http://localhost/elearning/src/backend/read.php",{
                user_type: 'student',
            })
            console.log(response.data)
        }catch(erro){
            console.log(response.error)
        }
    }
    return(
        <div></div>
    )
}

export default Student;