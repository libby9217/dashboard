import { useEffect, useState } from "react"
import Clock from "./Clock"

const Hello = ({user, onLogout})=>{
  const [greeting, setGreeting] = useState('');
  useEffect(()=>{
    const now = new Date();
    const hours = now.getHours();
    if(hours >= 5 && hours < 12){
      setGreeting("좋은 아침이에요");
    } else if(hours >=12 && hours <18){
      setGreeting("좋은 오후예요");
    } else if(hours >= 18 && hours < 21){
      setGreeting("좋은 저녁이에요");
    } else{
      setGreeting("좋은 밤이에요");
    }
  }, []);
  return (
    <div id="hello-page">
      <Clock />
      <p className="hello-greeting">{greeting}, {user}님</p>
      <button onClick={onLogout}>Logout</button>
      </div>
  )
}

export default Hello