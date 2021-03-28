const tasks = [
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

const Tasks = () => {
    return (
        <>
        {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks