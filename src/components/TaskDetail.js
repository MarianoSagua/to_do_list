import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

const TaskDetail = ({task, deleteTask}) => {
    const [newEditedTask, setNewEditedTask] = useState("");
    const [newDataOk, setNewDataOk] = useState(true);
    const inputNewTask = useRef(null);
    const inputContent = useRef(null);

    const handleEditTask = (value)=>{
        if(value !== ""){
            setNewEditedTask(value);
            setNewDataOk(false);
        }else{
            setNewDataOk(true);
        }
        
    }

    const addEditedTask = ()=>{
        inputNewTask.current.style.display = "none";
        inputContent.current.style.display = "flex";
    } 

    const editTask = ()=>{
        inputContent.current.style.display = "none";
        inputNewTask.current.style.display = "flex";
    } 

  return (
    <div className='container__tasks--task'>
        <div className='container__tasks--content' ref={inputContent}>
            {newDataOk ?
                <p>
                    <li>{task}</li>
                </p> 
                : 
                <p>
                    <li>{newEditedTask}</li>
                </p>
            }
            
            <div>
                <Button onClick={editTask} className='btnTask' variant='warning'>Edit</Button>
                <Button onClick={() => deleteTask(task)} className='btnTask' variant='danger'>Delete</Button>
            </div>
        </div>

        <div className='container__tasks--inputUpdate' ref={inputNewTask}>
            <input type="text" onChange={(e) => handleEditTask(e.target.value)} />
            <Button className='btnTask' onClick={addEditedTask} variant='dark'>Update</Button>
        </div>
    </div>
  )
}

export default TaskDetail


