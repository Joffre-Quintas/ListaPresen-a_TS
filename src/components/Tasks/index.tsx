import { BaseSyntheticEvent } from 'react';
import './Tasks.css'

export type Task = {
    work: string;
    time: string;
}

export function Tasks(props:Task) {
    function deleteTask(event:BaseSyntheticEvent) {
        
        const taskToDelete = event.target.parentElement
        taskToDelete.remove()
    }
    return(
        <div className='card'>
          <p><b>{props.work}</b></p>
          <p>{props.time}</p>
          <button className='btnDeleteTask' onClick={deleteTask}>X</button>
        </div>
    )
}