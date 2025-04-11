import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './todo'

function App(props) {
  function createTodos() {
    return props.value;
  }
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => createTodos());

  const handleOnclick = () => {
        setTodos([...todos,input])
   }

  
  return (
    <>
      <h2>Todo-App-Using-React</h2>
      
      <div className='main'>
        <input type="text" className='todo' placeholder='Enter Todos'/> &nbsp;&nbsp;&nbsp;
        <h3 onClick={handleOnclick} >Add Todo</h3>
      </div>
      
    </>
  )
}

export default App
