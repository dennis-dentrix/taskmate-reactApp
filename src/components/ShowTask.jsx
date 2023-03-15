export const ShowTask = ({taskList, setTaskList, task, setTask}) => {

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter(toDo => toDo.id !== id)
    setTaskList(updatedTaskList);
  }

  const handleEdit = (id) => {
    const selectedTask = taskList.find(todo => todo.id === id);
     setTask(selectedTask)

}
    
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">
            {taskList.length}
          </span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
      </div>
      <ul>
        {taskList.map((todo) => {
          return (
            <li key={todo.id}>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              
              <i 
                className="bi bi-pencil-square"
                onClick={() => handleEdit(todo.id)}
              ></i>

              <i 
                className="bi bi-trash"
                onClick={() => handleDelete(todo.id)}
              ></i>
            </li>
          )
        })}
      </ul>
        
    </section>  
  )
}
