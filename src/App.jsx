import { useState } from 'react'

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import './App.css'

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask 
          taskList={taskList} 
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <ShowTask 
          taskList={taskList} 
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
      </main>
    </div>
  )
}

export default App
