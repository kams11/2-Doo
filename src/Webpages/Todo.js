import React from "react";
import "./Css/Todo.css"
import { useState } from "react";



const Todo = () => {
    
    const [item,setItem] = useState("");
    const [newItem,setNewItem] = useState([]);

        const addItem =(event)=> {
            setItem(event.target.value);
        }

        const storeItems=()=>{
            setNewItem((prevValue)=>{
                return [...prevValue, item];
            });
            setItem=("");
        };

  return (
    <>
    <div className="maindiv">
        
        <div className="contentbody">
            <br />
            <h1>2-Doo List</h1>
            <br />
            <input name="addItem" type="text" class="form-control-sm" placeholder="list your item/work"  onChange={addItem} />
            <button type="submit" style={{marginLeft:"10px"}} class="btn btn-info" onClick={storeItems}>+</button>
            <br />
            <ol>

               { newItem.map((val)=>{
                
                    return (
                        <li className="data"> {val} </li>
                           )
                      
                })
                }
                
            </ol>
            <br />
            </div>
    </div>
    </>
    
  )
}

export default Todo;