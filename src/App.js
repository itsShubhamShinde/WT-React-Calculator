import { useState } from 'react';
import './App.css';
import Button from './Component/Button';
import Display from './Component/Display';


function App() {
  const [value, setValue] = useState("")
  const [display,setDisplay] = useState("")
 
  return (
    <div className="App">
    <div className='AppDiv'>
    <Display value={value} display={display}/>
    <Button value={value} setValue={setValue} display={display} setDisplay={setDisplay}/>
    </div>
    </div>
  );
}

export default App;
