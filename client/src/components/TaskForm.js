import React, { useState } from 'react';
import { db } from '../firebase'; // Import your Firestore instance
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reference the 'tasks' collection
      const tasksCollectionRef = collection(db, 'tasks');
      
      // Add a new document to the collection
      await addDoc(tasksCollectionRef, {
        title,
        description,
        dueDate,
        completed: false,
      });

      // Clear form fields
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
