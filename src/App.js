import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const [Tasks,setTasks] =  useState([
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
]);

const App = () => {
  const updateTask = () => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={Tasks} />}</div>
      </main>
    </div>
  );
};

export default App;
