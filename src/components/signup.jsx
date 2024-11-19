import React,{useState} from "react";

const Signup = ()=>{
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        user_type:"",
    })
    const [message,setMessage] = useState("");

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append(name,)
    
        try {
            const response = await fetch("http://localhost/elearning/src/backend/signup.php", {
                method: "POST",
                body: formData,
            });
    
            if (response.ok) {
                const data = await response.json(); 
                setMessage(data.message);
            } else {
                const errorText = await response.text();
                setMessage(errorText || "Signup failed!");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Signup failed!");
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
                    value={formData.name}
                    onChange={(e) =>{
                        setname(e.target.value)
                        console.log(name)
                    }}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
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