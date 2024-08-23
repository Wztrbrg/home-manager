import React, { useState } from "react";
import "../../../assets/style/sidebar/tabs/tasks.scss";


function Tasks() {

  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [titleField, setTitleField] = useState("");
  const [descField, setDescField] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "test",
      date: "2024-03-13",
      desc: "content of said task",
      done: false
    },
    {
      id: 1,
      title: "test2",
      date: "2024-03-13",
      desc: "content of said task",
      done: false
    },
    {
      id: 2,
      title: "test3",
      date: "2024-03-13",
      desc: "content of said task",
      done: false
    },
    {
      id: 3,
      title: "test4",
      date: "2024-03-13",
      desc: "content of said task",
      done: false
    },
  ]);

  
  const toggleNewTask = () => {
    setNewTaskOpen(!newTaskOpen)
  }
  
  const handleSubmit = () => {
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
    setTasks([...tasks, newTask]);
    setTitleField("");
    setDescField("");
  }
  
  const handleCancel = () => {
    setTitleField("");
    setDescField("");
  }
  
  const handleDelete = (id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks.splice(i, 1);
        break;
      }
    }
    setTasks([...tasks]);
  }
  
  const arrayItems = tasks.map((task => 
    <div key={task.id} className="task-item">
      <header className="task-header">
        <h2 className="task-title">{task.title}</h2>
        <h5 className="task-date">{task.date}</h5>
      </header>
      <p className="task-desc">{task.desc}</p>
      <div className="btn-container">
        <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </div>
  ))

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
        {arrayItems}
      </div>
    </div>
  )
}

export default Tasks;