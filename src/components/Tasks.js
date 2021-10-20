import React, { useState, useEffect } from 'react';
import Task from './Task';

async function getTasks() {
    const data = await fetch("http://localhost:8080/tasks/all");
    return await data.json();
}

function Tasks(props) {
    const [ tasks, setTasks ] = useState([]);

    async function updateTasks() {
        const result = await getTasks();
        await setTasks(result);
    }

    useEffect(() => {
        updateTasks();
    });

    return (
        <div>
            <div>
                {/*add logic to display "add items" if no items exist in tasks*/}
                {tasks.map(item => {
                    if(item.status === props.sort) {
                        return (
                            <div className="col">
                                <Task key={item.id} id={item.id} name={item.name} description={item.description} status={item.status}
                                priority={item.priority}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>

    );
}

export default Tasks;