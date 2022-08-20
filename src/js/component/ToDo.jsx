import React, { useState } from "react";

const ToDo = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [isShown, setIsShown] =useState(-1);
  
  
  const handlertask = (event) => {
    setTask(event.target.value);
  };

  const handlerKeyPress = (event) => {
    // event.preventDefault();

    if (event.key == "Enter" && task != "") {
    
        setTaskList([...taskList, task]);
        setTask("");
      
    }
  };
  const handlerButtomDelete = (indexid) => setTaskList(taskList.filter((tarea , index)=> (index != indexid)))
            
  return (
    <div className="container">
    <div className="row vh-100 colores">
      <div className="title d-flex justify-content-center pt-2">
        <h1 className="title-1">Lista de tareas</h1>
      </div>
      <div className="col-3"></div>
      <div className="col-6">
        <div className="Card" id="card">
          <div className="form-floating mb-3">
            <input
              onChange={handlertask}
              value={task}
              onKeyDown={handlerKeyPress}
              type="text"
              className="form-control c-kim "
              id="floatingInput"
              placeholder="Tarea por hacer"
              style={{ color: 'white'}}
            />
            
            <label htmlFor="floatingInput">No hay tareas, añadir tareas.</label>
            <div className="task"></div>
            {taskList.map((tarea, i) => {
              return (
              <span className="d-flex justify-content-between py-2 px-3 g-tareas text-white my-1
              rounded-1 border border border-info" key={`s-${i}`}
              onMouseEnter={() => {setIsShown(i)}} onMouseLeave={() => {setIsShown(-1)}} >
                <h2 key={i}>{tarea}</h2> 
               
                { isShown == i &&
                <i className="fas fa-minus-circle mt-3 ms-4 position-relative me-3 " 
                key={`p-${i}`} onClick={() => {handlerButtomDelete(i)}}></i>}
              </span>);
              
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ToDo;

