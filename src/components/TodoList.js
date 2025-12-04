const TodoList = ({todos, onDel, onToggle})=>{
  return (
    <ul id="todo-list">
      {
        todos.map((list, idx)=>{
          return (
          <li key={idx}>
            <span
              className={`todo-checkbox ${list.done ? "on" : "off"}`}
              onClick={() => onToggle(list.id)}
            ></span>
            <span 
            style={{textDecoration: list.done ? "line-through" : "none", textDecorationColor : list.done ? "#FFF" : "none", textDecorationThickness : list.done ? "2px" : "none"}}>{list.todo}</span>
            <button className="todo-close" onClick={()=>{onDel(list.id)}}></button>
            </li>
            )
        })
      }
    </ul>
  )
}

export default TodoList