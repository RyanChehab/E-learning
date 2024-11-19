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
            console.log(response.data.message);
        } catch(error){
            setMessage("Signup failed!");
        }
    }
    
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Signup</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
    
}

export default Signup;