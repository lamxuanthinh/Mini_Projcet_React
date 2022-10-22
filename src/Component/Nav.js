import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/countTime">Count Time</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/reducer">Reducer</Link>
      <Link to="/reducerTodoList">Reducer To Do List</Link>
    </div>
  );
};

export default Nav;
