import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import React, { useState} from "react";
import '../css/task.css';

function Task(props) {
    const [ isOpen, setOpen ] = useState();
    const [ name, setName ] = useState(props.name);
    const [ status, setStatus ] = useState(props.status);
    const [ description, setDescription ] = useState(props.description);

    const isSame = (type) => {
        return type === status;
    }

    async function changeStatus(id, status) {
        const options = {
            method: "PUT",
        };
        await fetch(`http://localhost:8080/tasks/id/${id}/setstatus/${status}`, options);
    }

    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{status}</p>
                <p className="card-text">{description}</p>
                <Dropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)} >
                    <DropdownToggle caret color="info">
                        Move to
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled={isSame("todo")} onClick={() => changeStatus(props.id, "todo")}>To-Do</DropdownItem>
                        <DropdownItem disabled={isSame("progress")} onClick={() => changeStatus(props.id, "progress")}>In-Progress</DropdownItem>
                        <DropdownItem disabled={isSame("done")} onClick={() => changeStatus(props.id, "done")}>Done</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>

    );
}
export default Task;