import { useState } from "react"

const TodoForm = ({onSave})=>{
  const [task, setTask] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault(); //새로고침 방지
    onSave(task);
    setTask('');
  }
  // const handleKeyDown = (e)=>{
  //   if(e.code === 'KeyA'){
  //     setView(task);
  //   }
  // }
  return (
    <div id="todo-form">
      <h2>할일 내용을 입력하세요</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        // onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  )
}

export default TodoForm