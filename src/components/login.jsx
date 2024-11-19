import React,{useState} from "react";
import axios from "axios";

const Login = () =>{

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
                setMessage(error.response.data.message);
            }
        }
    }

    return(
        <div>
            <h1>Login</h1>

            <input type="text"
            name = "email"
            placeholder="example@gmail.com"
            value= {email}
            onChange={(e)=>{
                console.log(email)
                setEmail(e.target.value)
            }}
            required
            />
            <input type="password" 
            name = "password"
            placeholder="***"
            value = {password}
            onChange={ (e) =>{
                setPassword(e.target.value)
            }
            }
            />
        </div>
    )



}

export default Login;