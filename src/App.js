import Todos from './components/Todos';
import Weather from './components/Weather';
import Hello from './components/Hello';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Quotes from './components/Quotes';
import "./App.scss";

function App() {
  const [userName, setUserName] = useState(null);
  const handleLogin = (data)=>{
    localStorage.setItem("USER_NAME", data);
    setUserName(data);
  }
  const handleLogout = ()=>{
    // localStorage.removeItem("USER_NAME");
    localStorage.clear();
    // setUserName('');
    //전체 페이지 새로고침
    window.location.reload();
  };
  useEffect(()=>{
    //로컬 스토리지에 userName이 있는지 체크
    const saved = localStorage.getItem("USER_NAME"); 
    setUserName(saved);
  }, []);
  return (
    <div className={`App ${userName ? "is-logged-in" : ""}`}>
      <div className='app_content'>
        {userName ? (
          <>
            <Weather />
            <Hello user={userName} onLogout={handleLogout} />
            <Todos />
            <Quotes />
          </>
        ) : (<Login onLogin={handleLogin}/>
        )}
      </div>
    </div>
  );
}

export default App;
