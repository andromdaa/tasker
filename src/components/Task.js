import React, { useState, useEffect } from 'react';

async function getTasks() {
    const data = await fetch("http://localhost:8080/tasks/all");
    return await data.json();
}

function Task() {
    const [ tasks, setTasks ] = useState([]);

    async function updateTasks() {
        const result = await getTasks();
        await setTasks(result);
    }

    useEffect(() => {
        updateTasks();
    })

    return (
        <div>
            <button onClick={async () => updateTasks()}> Update</button>
            <button onClick={() => console.log(tasks)}> GetState </button>
            <button onClick={() => setTasks(null)}> NullState </button>

            <div>
                {tasks.map(item => {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                        </div>
                    );
                })}
            </div>


        </div>
    );
}

export default Task;