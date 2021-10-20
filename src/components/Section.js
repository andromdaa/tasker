import Tasks from "./Tasks";
import "../css/section.css";
import AddTask from "./actions/AddTask";

function Section(props) {
    return (
        <div className="col">
            <div className="text-left margin">
                <h4>{props.status}
                    <span style={{float: "right"}}>
                        <AddTask buttonLabel={"+"} className={props.status + "add"} addTo={props.sort}/>
                    </span>
                </h4>
            </div>
            <Tasks sort={props.sort}/>
        </div>
    );
}

export default Section;