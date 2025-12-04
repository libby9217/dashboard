import { useState } from "react"

const Login =({onLogin})=>{
  const [user, setUser] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault(); //이미 있는 기능 실행 방지
  if(!user.trim()) return;
  onLogin(user.trim());
  }
  return (
    <form id="login-page" onSubmit={handleSubmit}>
      <h2>안녕하세요! 이름을 입력해 주세요.</h2>
      <input
        className="login-input"
        type="text"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
      />
      <p className="login-desc">
        Please enter your first name or the name you prefer to be called.
      </p>
      <button type="submit" disabled={!user.trim()}>Continue</button>
    </form>
  )
}

export default Login