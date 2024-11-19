import React,{useState} from "react";
import axios from "axios";

const Signup = ()=>{
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
    })
    const [message,setMessage] = useState("");
    
}