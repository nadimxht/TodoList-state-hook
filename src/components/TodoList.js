import React from 'react'

export default function TodoList({data,Update,DoneTodo}) {
  return (
    <div className='row'>
        { 
        data.map(e=>(
            <div className='row' key={e.id}>
                <p className='col-8' style={{textDecoration: e.done ? "line-through" : "none"}}>{e.description}</p>
                <button onClick={()=>Update(e.id)} className='col-1'>delete</button>
                <button onClick={()=>DoneTodo(e.id)} className='col-1'>Done</button>
                <input className='col-2' type='text' placeholder='changeTodo description' /> 
            </div>
        ))
        }
    </div>
  )
}
