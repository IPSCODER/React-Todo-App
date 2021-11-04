import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const submitItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) =>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
          return index !==id;
      })
    })

}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={submitItem}>+</button>
          <ol type="I">
            {Items.map((itema, index) => {
              return <ToDoList key={index} id={index} onSelect={deleteItem} text={itema} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
