import Home from "./Components/Home"
import ContactUs from "./Components/Contact"
import Students from "./Components/Students"
import './Components/Style.css';
import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <div className="navBar">
        <div><Link to="" className="label">Home</Link></div>
        <div><Link to="/Students" className="label">Students</Link></div>
        <div><Link to="/Contact" className="label">Contact Us</Link></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
