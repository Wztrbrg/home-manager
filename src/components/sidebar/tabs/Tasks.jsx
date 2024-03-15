import React, { useEffect, useState } from "react";
import { getTasks, createTask } from "../../../api/api";
import "../../../assets/style/sidebar/tabs/tasks.scss";


function Tasks() {

  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [titleField, setTitleField] = useState("");
  const [descField, setDescField] = useState("");

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleNewTask = () => {
    setNewTaskOpen(!newTaskOpen)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (titleField.trim() === '' || descField.trim() === '') {
      alert("Task title or description was not filled in correctly, please try again!");
      return;
    }
    const newTask = {
      id: tasks.length,
      title: titleField,
      date: new Date().toISOString().slice(0, 10),
      desc: descField,
      done: false
    };
    let res = await createTask(newTask);
    setTitleField("");
    setDescField("");
    fetchTasks();
  }

  const handleCancel = () => {
    setTitleField("");
    setDescField("");
  }

  return (
    <div className="tasks-wrapper">
      <header className="tasks-header">
        <h2>Manage your tasks</h2>
        <button onClick={toggleNewTask} className="large-pri-btn">+ New task</button>
      </header>
      {newTaskOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-heading">Add a new task</h3>
              <button onClick={toggleNewTask} className="close-btn">&#x2715;</button>
            </div>
            <div className="task-field-container">
              <div className="left">
                <label className="task-label">Title</label>
                <input type="text" name="title" value={titleField} className="task-title-field" onChange={(e) => setTitleField(e.target.value)} />
                <label className="task-label">Description</label>
                <textarea name="desc" value={descField} className="task-desc-field" cols="30" rows="5" onChange={(e) => setDescField(e.target.value)}></textarea>
                <div className="task-btn-container">
                  <button className="small-sec-btn" onClick={handleCancel}>Cancel</button>
                  <button className="small-pri-btn" onClick={handleSubmit}>Add task</button>
                </div>
              </div>
              <div className="v-divider"></div>
              <div className="right">
                <h3 className="info-heading">FUN FACT</h3>
                <h5 className="info-subheading">Setting up tasks or goals is scientifically proved to boost your effectivness significantly!</h5>
                <p className="info-p">By setting small goals that can be finished easier, you increase your chances of completing them and shorten the time between the rewards which helps with making large tasks seem less overwhelmig</p>
              </div>
            </div>
          </div>
        </div>  
      )}
      <div className="task-container">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <header className="task-header">
              <h2 className="task-title">{task.title}</h2>
              <h5 className="task-date">{task.date}</h5>
            </header>
            <p className="task-desc">{task.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks;