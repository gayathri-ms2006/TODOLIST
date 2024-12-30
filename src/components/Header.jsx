import './Header.css';
import { useState } from 'react';

export default function Header({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    priority: "High",
    status: "To Do",
    deadLine: "",
  });

  const [error, setError] = useState(""); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!taskData.task || !taskData.deadLine) {
      setError("Task and deadline are required!");
      return;
    }

    
    setError("");

    
    setTasks((prev) => {
      return [...prev, taskData];
    });

    
    setTaskData({
      task: "",
      priority: "High",
      status: "To Do",
      deadLine: "",
    });
  };

  return (
    <div className="heading">
      
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          placeholder="Enter the task"
          className="taskinput"
          value={taskData.task} 
          onChange={handleChange}
        />
        <div className="formbottom">
          <div>
            <h1 className="head">Priority</h1>
            <select
              name="priority"
              className="select"
              value={taskData.priority} 
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <h1 className="head">Status</h1>
            <select
              name="status"
              className="select"
              value={taskData.status} 
              onChange={handleChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
          <div>
            <h1 className="head">Deadline</h1>
            <input
              type="date"
              className="select"
              name="deadLine"
              value={taskData.deadLine} 
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="add">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    
      {error && <p className="error">{error}</p>}
    </div>
  );
}
