import './App.css';
import CreateTask from './components/CreateTask';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';

const tasks = [
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
  return (
    <div>
     <NavBar />
     <CreateTask />
     <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
