import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const storageTasks = JSON.parse(localStorage.getItem('tasks'));;
  const [tasks, setTasks] = useState(storageTasks != null ? storageTasks : []);
  const [filter, setFilter] = useState('toutes');



  useEffect(() => {
    console.log('tabhbhsks', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false, id: Date.now() }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'complete':
        return tasks.filter(task => task.completed);
      case 'non complete':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="container mt-4">
      <TaskForm addTask={addTask} />
      <div className="btn-group mt-3">
        <Button className="btn btn-primary" data-cy="filter-btn-all" onClick={() => setFilter('toutes')}>Toutes</Button>
        <Button className="btn btn-primary" data-cy="filter-btn-done" onClick={() => setFilter('complete')}>Complétées</Button>
        <Button className="btn btn-primary" data-cy="filter-btn-undone" onClick={() => setFilter('non complete')}>Non complétées</Button>
      </div>
      <TaskList tasks={filteredTasks()} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
