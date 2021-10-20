import {Badge} from "reactstrap";

function PriorityTag(props) {
    let type;

    if(props.priority === ("High")) {
        type = "danger";
    } else if(props.priority === ("Medium")) {
        type = "warning"
    } else if(props.priority === ("Low")) {
        type = "secondary"
    } else {
        type = ""
    }



return (
        <Badge color={type}>{props.priority}</Badge>
);
}

export default PriorityTag;