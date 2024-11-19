import React,{useState} from "react";

const login = () =>{

    const [message,setMessage] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost/elearning/src/backend/login.php",{
                "email" : email,
                "password" : password,
            })
            setMessage(response.data.message);
        }catch(error){
            if (error.response){
                setMessage(response.data.message);
            }
        }
    }

}