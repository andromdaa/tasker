import {Button} from "reactstrap";

function DeleteTask(props) {

    async function deleteTask(id) {
        const options = {
            method: "DELETE",
        };
        await fetch(`http://localhost:8080/tasks/id/${id}/delete`, options);
    }

    return (
        <div style={{zIndex:100}}>
            <Button outline color="primary" onClick={() => deleteTask(props.id)}>Delete</Button>
        </div>
    );
}

export default DeleteTask;