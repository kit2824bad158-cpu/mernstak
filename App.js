import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching message:", error));
  }, []);


  return (
    <div>
      <h1>React + Node Js</h1>
      <p> {message}</p>
    </div>
  );
}

export default App;

/*console.log("start");
setTimeout(()=>{
    console.log("Timeout");
}, 1000);
console.log("2nd Task");
setTimeout(()=>{
    console.log("Timeout");
}, 1500);
console.log("1st Task");
setTimeout(()=>{
    console.log("Timeout");
}, 2000);
console.log("Eng");*/
