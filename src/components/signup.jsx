import React,{useState} from "react";
import axios from "axios";

const Signup = ()=>{
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
    })
    const [message,setMessage] = useState("");
    
    const handleChange = (e)=>{
        const{name, value} = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost/elearning/src/backend/signup.php",formData);
            setMessage(response.data.message);
        } catch(error){
            setMessage("Signup failed!");
        }
    }



}