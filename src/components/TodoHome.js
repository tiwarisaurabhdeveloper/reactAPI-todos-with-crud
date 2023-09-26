import React, { useState } from 'react'
import TodoList from './TodoList'
import axios from 'axios'

function TodoHome() {
    const data={title:"",desc:""}
    const[todoInput,setTodoInput] = useState(data)

    const handleChange=(e)=>{
        setTodoInput({...todoInput,[e.target.name]:e.target.value})
        
        // console.log(todoInput);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            todoInput!= [] &&
            await axios.post('http://localhost:5000/Todos',todoInput)
            setTodoInput("")
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <>
    
    <div className="container">
    <main class="px-4 text-center" >
    <h1>Add Your Todo's Here.</h1>
  </main>
    <form action="/" className='boxclr'>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control boxclr" id="exampleFormControlInput1" placeholder="" name='title' value={todoInput.title} onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Your Todo</label>
            <textarea type="text" className="form-control boxclr" id="exampleFormControlInput1" placeholder="" name='desc' value={todoInput.desc} rows={3} onChange={handleChange}/>
        </div>
        <button className="btn btn-primary my-1" type='submit' onClick={handleSubmit}>Add</button>
    </form>
    <TodoList/>
    </div>
    </>
  )
}

export default TodoHome
