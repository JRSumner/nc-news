import { Link } from "react-router-dom";
import SortBy from "../utils/SortBy";

function Nav() {
  return (
    <section>
      {/* <SortBy /> */}
      <ul className="nav-bar">
        <li className="nav-item">
          <Link to="/"> Home </Link>
        </li>
        <li className="nav-item">
          <Link to="topic/football"> Football </Link>
        </li>
        <li className="nav-item">
          <Link to="topic/coding"> Coding </Link>
        </li>
        <li className="nav-item">
          <Link to="topic/cooking"> Cooking </Link>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
