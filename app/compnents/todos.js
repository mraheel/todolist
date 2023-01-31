import TodoItem from "./todo-item";
const getTodos = async () => {
    let todos = await fetch(`http://localhost:3000/api/todo/list`);
    return todos.json();
}

export default async function Todos() {
    const todos  = await getTodos();
    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {
                    todos.map ((t)=>{
                        return (
                            <li key={t.id} style={{ padding: 5 }}>
                                <TodoItem obj={t} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}