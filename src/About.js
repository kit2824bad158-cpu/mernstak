import { useEffect, useState } from "react";
function About() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/api/about")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  return <h2>{message}</h2>;  
}
export default About;