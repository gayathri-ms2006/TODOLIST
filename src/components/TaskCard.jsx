import './Taskcard.css';
import deleteIcon from '../assets/delete.png';

export default function TaskCard({title,priority,deadLine,handleDelete,index}){
    return(
        <article className='task-card'>
           <div> <p className='card-text'>{title}</p> 
        <div className="content">
        <p className='text'><span>PRIORITY:</span>{priority}</p> 
        <p className='text'><span>DEADLINE</span>{deadLine}</p> 
        </div>
        </div>
        <div className="delete" onClick={()=>handleDelete(index)}>
            <img src={deleteIcon} className='delicon'/>
        </div>
        </article>
    )
}