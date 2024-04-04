import React from 'react';

function TaskList({ tasks, toggleTask }) {
  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <li key={task.id} data-cy="task-item" onClick={() => toggleTask(task.id)} className={`list-group-item ${task.completed ? 'text-decoration-line-through' : ''}`}>
        {task.text}
      </li>
      ))}
    </ul>
  );
}

export default TaskList;
