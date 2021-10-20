import Tasks from "./Tasks";

function Section(props) {
    return (
        <div className="col" >
            <div className="text-left">
                <h4>{props.status}</h4>
            </div>
            <Tasks sort={props.sort}/>
        </div>
    );
}

export default Section;