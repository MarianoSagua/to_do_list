import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

const TaskDetail = ({tasks, deleteTask}) => {
    const [newEditedTask, setNewEditedTask] = useState("");
    const [newDataOk, setNewDataOk] = useState(true);
    const inputNewTask = useRef(null);
    const inputContent = useRef(null);

    const handleEditTask = (e)=>{
        const data = e.target.value;
        if(data != ""){
            setNewEditedTask(data);
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

    const handleDelete = ()=>{
        deleteTask(tasks);
    } 

  return (
    <div className='container__tasks--task'>
        <div className='container__tasks--content' ref={inputContent}>
            {newDataOk ? <p><li>{tasks}</li></p> : <p><li>{newEditedTask}</li></p>}
            
            <div>
                <Button onClick={editTask} className='btnEdit' variant='warning'>Edit</Button>
                <Button onClick={handleDelete} className='btnDelete' variant='danger'>Delete</Button>
            </div>
        </div>

        <div className='container__tasks--input' ref={inputNewTask}>
            <input type="text" onChange={handleEditTask} />
            <Button onClick={addEditedTask} variant='dark'>Update</Button>
        </div>
    </div>
  )
}

export default TaskDetail


