import Header from './components/Header';
import Section from './components/Section';
import './index.css';
import './App.css';
import todo from './assets/direct-hit.png';
import progress from './assets/glowing-star.png';
import { useState, useEffect } from 'react';


const oldTask = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      
      return oldTask ? JSON.parse(oldTask) : [];
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      return [];
    }
  });

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <main className='app'>
     
      <Header setTasks={setTasks} />
      <div className='app_main'>
        <Section title="TO DO" icon={todo} tasks={tasks} status="To Do" handleDelete={handleDelete} />
        <Section title="IN PROGRESS" icon={progress} tasks={tasks} status="In Progress" handleDelete={handleDelete} />
      </div>
    </main>
  );
}

export default App;
