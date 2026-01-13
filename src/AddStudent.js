import { useState , useEffect } from "react";

function AddStudent() {
    const [course, setCourse] = useState("");
    const [age, setAge] = useState("");
    const [name, setName] = useState("");

    function handlesubmit(e) {
        e.preventDefault();

        fetch("http://localhost:4000/api/students", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                age: age,
                course: course
            })
        });
    };

    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <br />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;