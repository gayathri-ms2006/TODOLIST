import './Section.css';
import TaskCard from './TaskCard';

export default function Section({ title, icon, tasks, status, handleDelete }) {
  
  if (!Array.isArray(tasks)) {
    console.error('Expected tasks to be an array, but got:', typeof tasks);
    tasks = [];
  }

  return (
    <section className='taskcol'>
      <h2 className='tasks'>
        <img src={icon} alt="" className='img'/>
        {title}
      </h2>
      
      {tasks.map((task, index) => (
        task.status === status && (
          <TaskCard
            key={index}
            title={task.task}
            priority={task.priority}
            deadLine={task.deadLine}
            handleDelete={handleDelete}
            index={index}
          />
        )
      ))}
    </section>
  );
}
