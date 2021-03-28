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
  return (
    <div className="container">
      <Header title={1}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
