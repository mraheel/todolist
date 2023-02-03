"use client";
import { useRouter } from "next/navigation";
const update = async (id, isDone, refresh) => {

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ id, isDone })
    };
    fetch(`/api/todo/update`, requestOptions);
    refresh();
}

const deleteRow = async (id, refresh) => {
    const requestOptions = {
        method: 'DELETE'
    };
    fetch(`/api/todo/delete?id=${id}`, requestOptions);
    refresh();
}

export default function TodoItem({ obj }) {
    const router = useRouter();
    return (
        <div style={{ padding:'5px 0px'}}>
           <label><input  defaultChecked={obj.isDone} onChange={(e)=> update(obj.id, e.target.checked, router.refresh )} type="checkbox" /> {obj.name} </label> <button style={{float:'right'}} onClick={(e) => deleteRow(obj.id, router.refresh , e)}>Delete</button>
        </div>

    )
}