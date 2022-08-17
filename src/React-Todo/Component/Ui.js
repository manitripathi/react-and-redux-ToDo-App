import React, { useState } from 'react'

const TodoUI=()=>{
    const [inputValue, setInputValue] = useState("");
    const[list,setList]=useState([])
    const onClickAddButton=()=>{
        setList([...list,inputValue])
        setInputValue("")
    }
    const handleDeleteButton=(index)=>{
        setList((prev)=>{
            return [...prev.filter((item,id)=>{
                return id!==index
            })
            ]
        })
    }
    const handleClearAllButton=()=>{
        setList([])
    }

    return(
        <>
      <div className="App">
        <h2>React Todo List</h2>
      </div>
      <div className="container">
        <div className="card bg-info text-white todo-list-card-body-wrapper">
          <div className="card-body todo-card-body-wrapper">
            <input
              type="text"
              className="form-control"
              placeholder="Add Items Here..."
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}
            />
            <i
              className="fa fa-plus"
              style={{ color: "black", fontSize: "30px", margin: "4px" }}
              aria-hidden="true"
              onClick={(e)=>onClickAddButton(e)}
            ></i>
          </div>
          <div className="card bg-success text-white">
            <div className="card-body">
             {list?.map((item,index)=>{
                return(
                  <div className="todo-list-card-body-content-wrapper" key={index}>
                   <div>{item}</div>
                   <div>
                <i className="fas fa-trash-alt" 
                style={{ color: "red" }}
                id={index}
                onClick={()=>handleDeleteButton(index)}
                ></i>
              </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger todo-list-all-clear-button"
            onClick={handleClearAllButton}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
    )
}
export default TodoUI;