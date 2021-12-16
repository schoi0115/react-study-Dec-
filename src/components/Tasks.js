import Task from './Task'
const Tasks = ({tasks, onDelete}) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={tasks.id} 
                task={task} 
                onDelete={onDelete}/>
            ))}
        </>
    )
}
export default Tasks