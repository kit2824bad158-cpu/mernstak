import { useEffect, useState } from "react";
function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/api/home")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  return <h2>{message}</h2>;
}
export default Home;