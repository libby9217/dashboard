import { useEffect, useState } from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
/**
           * id: 현재시간 Date.now():
           * done: true/false
           * todo: text
          */
const Todos = ()=>{
  const [todos, setTodos] = useState(()=>{
    //localstorage에 있는 TODOS를 읽어오기
    const loaded = localStorage.getItem("TODOS");
    //값이 있으면 변환해서 쓰고 없으면 빈 배열을 기본값
    return loaded ? JSON.parse(loaded) : [];
  });
  useEffect(()=>{
    //todos를 localstorage에 저장
    const saved = JSON.stringify(todos);
    localStorage.setItem("TODOS", saved)
  }, [todos]);
  const handleTodosSave = (list)=>{
    //배열에 저장
    // setTodos((prev)=>{return [...prev, list]});
    const newTodo = {id:Date.now(), done:false, todo:list}
    setTodos((prev)=>{return[...prev, newTodo]});
  }
  const handleTodosDel = (id)=>{
    //idx번호에 해당되는 list를 제거
    const update = todos.filter((item)=>{
      return item.id !== id;
    });
    setTodos(update);
  }
  const handleToggle = (id)=>{
    const update = todos.map((list)=>{
      return list.id === id ? {...list, done:!list.done} : list;
    });
    setTodos(update);
  }
  return (
    <div id="toto-page">
      <TodoForm onSave={handleTodosSave} />
      <TodoList todos={todos} onDel={handleTodosDel} onToggle={handleToggle} />
    </div>
  )
}

export default Todos