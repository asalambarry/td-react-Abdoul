import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
function TaskForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center mt-3 p">
      <input 
      className="form-control mr-2  " 
        data-cy="task-input" 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
       <button data-cy="add-task-btn" type="submit" className="btn btn-primary">Ajouter</button>
    </form>
  );
}

export default TaskForm;
