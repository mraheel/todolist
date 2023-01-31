"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function CreateTodo() {
    const router = useRouter();
    const [todoTask, setTodoTask] = useState("");
    const [todotext, setTodotext] = useState(false);
    
    const createNew = async () => {
        if(!todoTask){
            setTodotext(true);
        }else{
            setTodotext(false);
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({ name: todoTask }),
            };
           await fetch(`/api/todo/add`, requestOptions);
           setTodoTask("");
           router.refresh();
        }
        
    }

    return (
        <div>
            <input type="text" value={todoTask} onChange={(e)=> setTodoTask(e.target.value)} placeholder="Enter Todo Task" /> <button onClick={(e)=> createNew()}>Add Todo</button>
            <div style={{color:'red', marginTop:'10px'}}>{ todotext? `Todo field is required.`: null }</div>
        </div>
    );
}