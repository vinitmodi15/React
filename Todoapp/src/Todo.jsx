import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';    

export default function Todo(){
    let [todos,setTodos] = useState([{task:"sample task",id:uuidv4(),isDone:false}])
    let[newTask,setNewTask] = useState("");
    let addNewTask = ()=>{
        // console.log("Add button was clicked")
        setTodos((prevTodos)=>{
          return  [...prevTodos,{task:newTask,id:uuidv4(),isDone:false}]
        })
        setNewTask(""); 
        //jese hi task add hojaye frse newtask ko emoty krdi taaki input vaale m pehla vaala text ya we can say task nhiu dikhe
    }
    let updateTodo = (event)=>{
        // console.log(event.target.value)
        setNewTask(event.target.value); 
        // isse newtask initialise ho rha hai
    }
    let deleteToDo=(id)=>{
        // console.log(id)
        // let newTodo = todos.filter((todo)=>{todos.id !==id})
        setTodos((prevTodos)=>todos.filter((prevtodos)=>{prevtodos.id !=id}))
        // console.log(newTodo)
    }
    let markAsDoneAll = ()=>{  
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                // return { ...todo, task: todo.task.toUpperCase() };
                // return{...todo,isDone:todo.isDone.true}
                return(
                    {...todo,isDone:true}
                )
            });
        });
        
    }
    let markAsDone = (id) => { //previously it was upperCaseOne
        // console.log("one")
        setTodos((prevTodo) => {
            return prevTodo.map((todos) => {
                if (todos.id === id) {
                    return {
                        ...todos,
                        // task: todos.task.toUpperCase()
                        isDone:true
                    };
                } else {
                    return todos;
                }
            });
        });
    };
    // let markAsDone = ()=>{
    //     console.log("clicked")
    // }
    
    return(
      
        <div>
            <input type="text" placeholder="add new task" value={newTask} onChange={updateTodo}/> 
             {/* //pehle onchange trigger hoga thik hai fir hum chahte hai ki vo function call hojaaye and then fr jo newtask ki jo vlaue hai vo input element m dikhe. isliye apn ne vlaue likhi hai udhr. */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={addNewTask} >Add</button>
            <hr />
            <ul>
            {
                todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                            {todo.task}
                        </span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                {/* <button onClick={() => upperCaseOne(todo.id)}>UpperCaseOne</button> */}
                <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
      </li>
    )
  })
}

            </ul>
            <button onClick={markAsDoneAll}>Mark As Done All</button>
        </div>
    )
}