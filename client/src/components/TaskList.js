import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Import your Firestore instance
import { collection, query, onSnapshot } from 'firebase/firestore'; // Import Firestore functions
import { Timestamp } from 'firebase/firestore'; // Import Timestamp to handle timestamp fields

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Reference to the 'tasks' collection
    const tasksCollectionRef = collection(db, 'tasks');

    // Create a query for the tasks collection
    const q = query(tasksCollectionRef);

    // Listen for real-time updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasksArray = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Check if dueDate is a Timestamp and convert it to a Date object
        const dueDate = data.dueDate instanceof Timestamp ? data.dueDate.toDate() : data.dueDate;
        tasksArray.push({ ...data, id: doc.id, dueDate });
      });
      setTasks(tasksArray);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate.toLocaleDateString()}</p> {/* Updated to use toLocaleDateString */}
            <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
