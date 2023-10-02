import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function TodoList() {
    const [listTodo,setListTodo]=useState([])

    useEffect(()=>{
        async function getAllTodo(){
           try {
            const todo=await axios.get('http://localhost:5000/Todos')
            setListTodo(todo.data)

           } catch (error) {
            console.log(error);
           }
        }
        getAllTodo()
        
    })

    
    function calculateTimeAgo(timestamp) {
        const currentTime = new Date();
        const inputTime = new Date(timestamp);
        const timeDifference = currentTime - inputTime;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
            
        if (seconds < 60) {
          return seconds + ' seconds ago';
        } else if (minutes < 60) {
          return minutes + ' minutes ago';
        } else if (hours < 24) {
          return hours + ' hours ago';
        } else {
          return days + ' days ago';
        }
      }
    const removeData=async(id)=>{
        await axios.delete(`http://localhost:5000/Todos/${id}`)
    }

  return (
    <>
    {listTodo.length>=1 && <h2>Todo's Here</h2>}
        {
            listTodo.map((todo,i)=>{
                return(
                    <div className="container boxclr" key={i}>
                        <ol>
                        <h4 className='m-0'>{i+1}. {todo.title} </h4>
                        <span className="badge  text-bg-light">{calculateTimeAgo(todo.todoTimestamp)} </span>
                        <pre className='mb-1'>{todo.desc}
                        {/* <span className="badge text-bg-info mx-2">V</span> */}
                        <span className="badge text-bg-warning mx-2 " role='button'><Link className='nav-link' to={`/todoedit/${todo.id}`}>Edit</Link></span>
                        <span className="badge text-bg-danger mx-2" role='button' onClick={() => {removeData(todo.id);}}>Remove</span>                         
                        </pre>
                        </ol>
                    </div>
                )
            })
        }

    </>
  )
}

export default TodoList
