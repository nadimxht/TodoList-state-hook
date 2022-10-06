import React ,{useState} from 'react'

export default function TodoInput({AddTodo}) {
    const [input,setInput]=useState('');
    const HandleEnter=()=>{
        AddTodo({id:4,description:input,done:false});
        setInput('');
    }
  return (
    <div className='row'>
        <input width={'100%'} value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add todo" onKeyPress={(e)=>e.key=="Enter"? HandleEnter() :null}  type='text' />
    </div>
  )
}
