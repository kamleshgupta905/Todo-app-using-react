import {useState } from 'react'
import React from 'react';
import { Delete } from 'lucide-react';

const App=() =>{
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleOnclick = () => {
    const upperInput = input.toUpperCase().trim();
    setTodos([...todos, upperInput]);
    setInput('');
  }

  const deleteTodo = (i) => {
    let newTodos = (todos.filter((todo, index) => index !== i));
    setTodos(newTodos)
  }
  
  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-zinc-200'>
        <h2 className='text-3xl font-semibold mt-8'>Todo-App-Using-React</h2>
        <div className='mt-8 md:w-2/6 w-[90%]'>
          <div className='my-4 w-full'>
            <input
              type="text"
              className='border border-gray-400 p-2 rounded-2xl w-full'
              placeholder='Enter Your Todos Here'
              value={input}
              onChange={handleInput}
            />
          </div>
          <div>
            <button className='w-full bg-zinc-400 p-2 rounded-2xl
            ' onClick={handleOnclick}>Add Todo</button>
          </div>
          <div>
            {todos[0] ? todos.map((todo, i) => <div className='flex justify-between w-full bg-zinc-800 my-2 p-2 text-lg text-white rounded-md'> <p>{todo}</p><Delete onClick={()=>deleteTodo(i)}/></div>):"There is not todos present..."}
          </div>
          <div >
            <button className='mt-8 p-2 w-full bg-red-600 rounded-lg text-white ' onClick={()=>setTodos([])}>Delete All</button>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
