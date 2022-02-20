import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
export default function Home() {

  const [userInput,setUserInput] =useState('')
  const [todolist,setTodolist] = useState([])
  const handleChange = (e) => {
    e.preventDefault()
    setUserInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodolist([userInput,...todolist])
    setUserInput('')
  }
  const handleDelete = (todo) => {
    const updateArr = todolist.filter(todoItem=> todolist.indexOf(todoItem) !== todolist.indexOf(todo))
    setTodolist(updateArr)
  }
  return (
    <div>
      <h1>Todo list</h1>
      <form>
        <input type="text" value={userInput} onChange={handleChange} /><button onClick={handleSubmit}>submit</button>
      </form>
      <ul>
        {
          todolist.length >=1 ? todolist.map((todo,idx)=>{
            return <li key={idx}>{todo} <button onClick={(e)=>{
              e.preventDefault()
              handleDelete(todo)
            }}>delete</button></li>
          }) : 'Enter a todo item'
        }
      </ul>
    </div>
  )
}
