import { useState, useEffect } from "react";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [editingId, setEditingId] = useState(null)
    const [editForm, setEditForm] = useState({
        name:"",
        age:"",
        course:""
    })

    function saveEdits(){
        fetch(`http://localhost:4000/api/students/${editingId}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm)
        }).then(() => {
            fetchStudents();
            setEditingId(null);
        });
    }

        function startEdit(std){
            setEditingId(std._id)
            setEditForm({
                name:std.name,
                age:std.age,
                course:std.course
            })
        }
    

    function deleteStudent(id) {
        fetch(`http://localhost:4000/api/students/${id}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Student deleted");
        });
    }

    function fetchStudents() {
         fetch("http://localhost:4000/api/students")
      .then(response => response.json())
      .then(data => setStudents(data.students))
      .catch(error => console.error("Error fetching students:", error));
    }

    useEffect(() => {
        fetchStudents();
  }, []);

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>
            <input
              value={editForm.name}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="number"
              value={editForm.age}
              onChange={(e) =>
                setEditForm({ ...editForm, age: e.target.value })
              }
            />
          </td>
          <td>
            <input
              value={editForm.course}
              onChange={(e) =>
                setEditForm({ ...editForm, course: e.target.value })
              }
            />
          </td>
          <td>
            <button onClick={()=> saveEdits()}>
              Save
            </button>
          </td>

                    </tr>
                </tbody>
                    
            </table>

            <h1>Student List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.course}</td>
                            <td>
                                 <button onClick={() => startEdit(student)}>Edit</button>
                                <button onClick={() => deleteStudent(student._id)}>Delete</button>  
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
/**import { useEffect, useState } from "react";
function StudentList() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("add"); // default mode

  const [oldName, setOldName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  /* FETCH STUDENTS */
  /*const fetchStudents = async () => {
    const res = await fetch("http://localhost:4000/api/students");
    const data = await res.json();
    setStudents(data.students);
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  /* ADD STUDENT */
  /*const addStudent = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age: Number(age), course })
    });

    clearForm();
    fetchStudents();
  };

  /* DELETE STUDENT */