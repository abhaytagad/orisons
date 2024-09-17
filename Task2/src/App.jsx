import { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/tasks').then((res) => setTasks(res.data));
  }, []);

  const addTask = (task) => {
    axios.post('http://localhost:4000/tasks', task).then((res) => {
      setTasks([...tasks, res.data]);
    });
  };

  const completeTask = (id) => {
    axios.patch(`http://localhost:4000/tasks/${id}`, { isCompleted: true }).then(() => {
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, isCompleted: true } : task
        )
      );
    });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:4000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
