import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
/*import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";*/
/* function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
 */
function App(){
  return(
    <div>
      <StudentList />
      <AddStudent />
      {/*<DeleteStudent/>
      <EditStudent/>*/}
    </div>
  );
}
export default App;