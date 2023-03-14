export const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id) {
      console.log("Changing...!")
      const date = new Date();
      const updatedTask = taskList.map((todo) => (
          todo.id === task.id ? {id: task.id, 
          name: e.target.task.value , 
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ));
      setTaskList(updatedTask);

    } 
    if(!task.id) {
      console.log("Old...!")
      const date = new Date();
      const newTask = {
      id: date.getTime(), 
      name: e.target.task.value, 
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
      setTaskList([...taskList, newTask]);
    }
    e.target.task.value = ""
    
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit }>
        <input type="text" name="task" value={task.name} autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({...task, name:e.target.value} )} />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}
