import React, {useState} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
 
  const [todos , setTodos] = useState([
    {
      id:1,
      description:"Go to work",
      done:false ,
    },
    {
      id:2,
      description:"Sport",
      done:false ,
    },
    {
      id:3,
      description:"Dinner",
      done:false ,
    }
  ])
 
const DeleteTodo = (id)=>{
  setTodos(todos.filter(e=>e.id != id))  //  todos = todos.filter(e=>e.id != id)
}
const DoneTodo = (id)=>{
  setTodos(todos.map(e=>e.id==id?{...e,done:!e.done}:e))
}
const AddTodo=(todo)=>{
  setTodos([...todos,todo])
}


  return (
    <div className='container'> 

      <TodoInput AddTodo={AddTodo}/>
      <TodoList  data={todos} Update={DeleteTodo}  DoneTodo={DoneTodo} />
    </div>
  )
}
