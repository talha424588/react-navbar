import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './componenets/Navbar';

function App() {
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [theme,setTheme] = useState(selectedTheme ? selectedTheme : "light");

  useEffect(()=>
  {
    localStorage.setItem("selectedTheme",theme);
  },[theme])
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
