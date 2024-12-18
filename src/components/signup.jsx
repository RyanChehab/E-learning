import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
    // init variables along with there setting functions
    const [message,setMessage] = useState("");
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    // init navigate
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost/elearning/src/backend/signup.php", {
                    "name": name,
                    "email" : email,
                    "password" : password,
                    "user_type" : "student"
            });
                setMessage(response.data.message);    
                navigate("/Login");        
                alert("Student account created")
            } catch (error) {
                if(error.response){
                    setMessage(error.response.data.message)
                }
        }
    };
    
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) =>{
                        setname(e.target.value)
                    }}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    required
                />
                
                <button type="submit">Signup</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
    
}

export default Signup;