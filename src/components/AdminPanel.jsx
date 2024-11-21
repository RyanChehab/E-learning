import React, {useState} from "react";
import StudentsList from "./Student";
import InstructorsList from "./Instructors";
import CourseList from "./Courses";

const Admin = () =>{
    const [activeSection, setActiveSection] = useState("students")
    return(
<>
{/* setActiveSection("students") */}
        <div className="AdminPanel">
        <button className="admin-btn" onClick={()=>{
        setActiveSection((show)=>(show === "students"? "" : "students"))
        }}>Students</button>

        <button className="admin-btn" onClick={()=>setActiveSection("instructors")}>Instructos</button>

        <button className="admin-btn"  onClick={() => setActiveSection("courses")}>Courses</button>
        </div>

        <div className="admin-content">
        {activeSection === "students" && <StudentsList />}
        {activeSection === "instructors" && <InstructorsList/>}
        {activeSection === "courses" && <CourseList />} 
        </div> 
        </>
    )
}

export default Admin;