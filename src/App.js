import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }

])

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}


  return (
    <div>
      <Header 
        // title = {1}
      />
      <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      />
    </div>
  );
}

// class App extends React.Component {
//   return <h1>Hello from a class</h1>
// }

export default App;
