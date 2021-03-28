import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState(
            [
                {
                    id: 1,
                    text: "task1",
                    day: "Feb 5th at 2:30PM",
                    reminder: true,
                },
                {
                    id: 2,
                    text: "task2",
                    day: "Feb 6th at 2:30PM",
                    reminder: true,
                }
            ]
        )
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header title={1}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
