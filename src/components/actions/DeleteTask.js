import {Button} from "reactstrap";
import { ReactComponent as TrashIcon } from "../static/trash.svg";

function DeleteTask(props) {

    async function deleteTask(id) {
        const options = {
            method: "DELETE",
        };
        await fetch(`http://localhost:8080/tasks/id/${id}/delete`, options);
    }

    return (
        <div>
            <Button outline color="danger" onClick={() => deleteTask(props.id)}><TrashIcon/>
            </Button>
        </div>
    );
}

export default DeleteTask;