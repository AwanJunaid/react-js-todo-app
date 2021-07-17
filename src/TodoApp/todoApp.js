import React,{useState} from 'react';
 import './todoApp.css';

function TodoApp(){

    const [inputItems,setInputItems]=useState("");
    const [items,setItems]= useState([]);

    const addItems=()=>{
        setItems([...items,inputItems]);
        setInputItems("");
        
    }
    const deleteItem=(id)=>{
        const updateItems=items.filter((data,ind)=>{
            return ind !== id;
        });
        setItems(updateItems);
    }
    const removeAll=()=>{
        setItems([]);
    }
    return(
        <div className="todo-app">
            <div className="todo-container">
                <figure>
                 <figcaption>Add Your Item</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="Add Items"
                    value={inputItems}
                    onChange={(e)=>setInputItems(e.target.value)}/>
                    <i className="fa fa-plus add-btn"
                    onClick={addItems}></i>
                </div>
                <div className="showItems">
                   {
                       items.map((data,ind)=>{
                           return(
                               <div className="everyItem" key={ind}>
                                   <h3>{data}</h3>
                                   <i className="far fa-trash-alt add-btn" title ="Delete Item"
                                    onClick={()=>{deleteItem(ind)}}></i>

                               </div>
                           )
                       })
                   }
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove all"
                     onClick={removeAll}><span>Remove All</span></button>
                </div>
            </div>
        </div>
    )
}
 export default TodoApp;