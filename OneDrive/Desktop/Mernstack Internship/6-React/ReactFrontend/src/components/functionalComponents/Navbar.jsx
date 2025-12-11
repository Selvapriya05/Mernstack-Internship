import { Link } from "react-router-dom";
import Props from "./Props";
import Task from "./task";
import State from "./State";
import Events from "./event";



function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
         <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>contact</li></Link>
          <Link to="/learningReact"><li>LearningReact</li></Link>

        </ul>
       
      </nav>
    </>
  );
}

export default Navbar;