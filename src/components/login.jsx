import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            console.log(response.data)
        }catch(error){
            if (error.response){
                setMessage(error.response.data.message);
            }
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onClick={handleSubmit}>
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
                
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            <br />
            <p>Dont have an account? <Link to="/Signup">Signup</Link> now!</p>
        </div>
    )



}

export default Login;