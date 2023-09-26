import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function TodoEdit() {
    const navigate=useNavigate();
    const {id}=useParams()
    // const data={title:"",desc:""}
    const [EditTodo,setEditTodo]=useState([])
    useEffect(()=>{
        async function opentodo(){
            try{
                const todo=await axios.get(`http://localhost:5000/Todos/${id}`);
                    setEditTodo(todo.data)
                } catch (error) {
                    console.log(error);
               }
        }
        opentodo()
    },[id])
    const handleChange=(e)=>{
        setEditTodo({...EditTodo,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/Todos/${id}`,EditTodo)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    const handleCancle=(e)=>{
        navigate('/')
    }
  return (
    <>
      {/* this the editing model */}
      <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
    <div class="modal-content">
            <div class="modal-header"> <h1 class="modal-title fs-5">Edit Your Todo</h1>
            <button type="button" class="btn-close" onClick={handleCancle} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-2">
                <label for="recipient-name" class="col-form-label">Title</label>
                <input type="text" class="form-control" value={EditTodo.title} onChange={handleChange} name='title' id="recipient-name"/>
            </div>
            <div class="mb-2">
                <label for="message-text" class="col-form-label">Edit Activity</label>
                <textarea class="form-control" rows={3} value={EditTodo.desc} onChange={handleChange} name='desc' id="message-text"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={handleCancle}>Close</button>
                <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save Activity</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  </div>
</div>
        
                            
    </>
  )
}

export default TodoEdit
