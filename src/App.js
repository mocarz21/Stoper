import './App.css';
import Button from './components/Button/Button';
import Time from './components/Time/Time';
import { useState } from "react"
const App = () => {

  const [second, setSecond] = useState(0)
  const [minuts, setMinuts] = useState(0)
  const [hour, setHour] =     useState(0)
  let runTime =''
  
  const addHour = () => {
    setHour(prevValue => prevValue + 1);
  }

  const addMinuts = () =>{
    setMinuts(prevValue => second(prevValue + 1));
    if( minuts === 59){
      setMinuts('00');
      addHour();
    }
    console.log('sss',second)
  }

  const addSecond = () => {
    let preValue = 0
   setSecond(  prevValue =>  prevValue + 1);   {/*preValue - bazuje na poprzedniej wartości*/}

    console.log('S',second)

    if( second === 5) {
      setSecond('00');
      addMinuts();
    }
    
  }

  const timer =()=>{
    setInterval(addSecond, 1000)
}
  const stop = () =>{
    console.log('stop')
    clearInterval(runTime);
  }

  return (
    <div className="App">
      <Button/>
      <Time/>
    </div>
  );
}

export default App;
