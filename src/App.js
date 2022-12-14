import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, ClearTodo, DeleteTodo } from "./Action/Action";
import "./App.css";
import Todo from "./React-Todo";

function App() {

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const list = useSelector((state)=>state.TodoReducer)

  return (
    <>
    <>
      <div className="App">
        <h2>Redux Todo List</h2>
      </div>
      <div className="container">
        <div className="card bg-info text-white todo-list-card-body-wrapper">
          <div className="card-body todo-card-body-wrapper">
            <input
              type="text"
              className="form-control"
              placeholder="Add Items Here..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <i
              className="fa fa-plus"
              style={{ color: "black", fontSize: "30px", margin: "4px" }}
              aria-hidden="true"
              onClick={()=>dispatch(AddTodo(inputValue),setInputValue(""))}
            ></i>
          </div>
          <div className="card bg-success text-white">
            <div className="card-body">
             {list?.list?.map((item)=>{
                return(
                  <div className="todo-list-card-body-content-wrapper" key={item.id}>
                   <div>{item.data}</div>
                   <div>
                <i className="fas fa-trash-alt" 
                style={{ color: "red" }}
                onClick={()=>dispatch(DeleteTodo(item.id))}
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
            onClick={()=>dispatch(ClearTodo())}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
    <Todo/>
    </>
  );
}

export default App;
