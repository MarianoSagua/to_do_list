import './App.scss';
import { Button } from 'react-bootstrap';
import { useRef, useState } from 'react';
import TaskDetail from './components/TaskDetail';

function App() {
  const [tasks, setTasks] = useState(["wake up early", "go to the store", "wash the car"]);
  const [newTask, setNewTask] = useState("");
  const inputAddTask = useRef(null);

  const addNewTask = ()=>{
    setTasks([...tasks, newTask]);
    setNewTask("");
    inputAddTask.current.value = "";
  }

  const deleteTask = (taskDelete)=>{
    const newTasks = tasks.filter((item) => item !== taskDelete);
    setTasks(newTasks);
  }

  return (
    <div className='fondo'>
      <section className='container'>
        <h1 className='container__text'>Tasks</h1>
        <h5 className='container__text'>Add, edit or delete your tasks.</h5>

        <div className='container__input'>
          <input ref={inputAddTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder='Add your task!'/>
          <Button className='btnTask' onClick={addNewTask} variant='dark'>Add task</Button>
        </div>

        <div className='container__tasks'>
          {tasks.map((item, idx)=>{
            return(
              <TaskDetail task={item} key={idx} deleteTask={deleteTask}/>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;






  
