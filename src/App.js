import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import TaskDetail from './components/TaskDetail';

function App() {
  const [tasks, setTasks] = useState(["wake up early", "go to the store", "wash the car"]);
  const [newTask, setNewTask] = useState("");

  const handleTask = (e)=>{
    const data = e.target.value;
    setNewTask(data);
  }

  const addNewTask = ()=>{
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  const deleteTask = (taskDelete)=>{
    const newTasks = tasks.filter((item) => item !== taskDelete);
    setTasks(newTasks);
  }

  return (
    <div className='fondo'>
      <div className='container'>
        <h1 className='container__text'>Tasks</h1>
        <h5 className='container__text'>Add, edit or delete your tasks.</h5>

        <div className='container__input'>
          <input onChange={handleTask} type="text" placeholder='Add your tasks!'/>
          <Button onClick={addNewTask} variant='dark'>Add task</Button>
        </div>

        <div className='container__tasks'>
          {tasks.map((item, idx)=>{
            return(
              <TaskDetail tasks={item} key={idx} deleteTask={deleteTask}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;






  
