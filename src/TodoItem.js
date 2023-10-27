
function TodoItem(props){
    return (
        <li>
            <span>✅ {props.completed}</span>
            <p>{props.text}</p>
            <span>❌</span>
        </li>
        );
    }

export { TodoItem};