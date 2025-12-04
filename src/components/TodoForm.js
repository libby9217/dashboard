import { useState } from "react"

const TodoForm = ({onSave})=>{
  const [task, setTask] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault(); //새로고침 방지
    onSave(task);
    setTask('');
  }
  return (
    <div id="todo-form">
      <h2>오늘의 목표는 무엇인가요?</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        // disabled={isFull}
        />
      </form>
    </div>
  )
}

export default TodoForm