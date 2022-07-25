import React, { useState, useEffect } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

const data = [
  {
    title: "Visit the market",
    isCompleted: false,
  },
  {
    title: "Watch Coding Tutorials",
    isCompleted: false,
  },
  {
    title: "Sleeep",
    isCompleted: false,
  },
  {
    title: "Wake up early to practice coding",
    isCompleted: false,
  }
]

function App() {

  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({
    firstName: "Kipkoech",
    lastName: "Langat",
    avatarUrl: "gideonlangat98@gmail.com"
  })

  const [todo, setTodo] = useState("");

  //fetch data from an API
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = () => {
    setTodos(data)
  }


  //handleInputChange => onChange method
const handleTodoInput = (e) => {
  setTodo(e.target.value)
}
//handleSubmitChange => onClick, onSubmit
const handleSubmit = (e) => {
  e.preventDefault();

  //construct the object
  const newTodo = {
    title: todo,
    isCompleted: false
  }

  setTodos([...todos, newTodo])
  setTodo("")
  //update array of todos with the new object
  
}

  return (
    <div>
     <NavBar user={user}/>
     <CreateTask todo={todo} handleTodoInput={handleTodoInput} handleSubmit={handleSubmit}/>
     <TaskList tasks={todos}/>
    </div>
  );
}

export default App;
