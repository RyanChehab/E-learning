import React, {useState} from "react";

const Admin = () =>{
    const [activeSection, setActiveSection] = useState("students")
    return(
<>
        <div className="AdminPanel">
        <button className="admin-btn" onClick={setActiveSection("students")}>Students</button>
        <button className="admin-btn" onClick={setActiveSection("instructors")}>Instructos</button>
        <button className="admin-btn"  onClick={() => setActiveSection("courses")}>Courses</button>
        </div>

        <div className="admin-content">
        {activeSection === "students" && <StudentsList />}
        {activeSection === "instructors" && <InstructorsList />}
        {activeSection === "courses" && <CoursesList />}
        </div>
</>
    )
}

export default Admin;