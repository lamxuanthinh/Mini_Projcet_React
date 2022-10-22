import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Component/Nav";
import Table from "./ComponentTable/Table";
import CountDown from "./Component/CountDown";
import Todo from "./Component/Todo/Todo";
import Reducer from "./Component/LearnReducer/Reducer";
import TodoList from "./Component/LearnReducer/TodoList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/countTime" element={<CountDown />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/test" element={<div>124</div>} />
        <Route path="/reducerTodoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
