
const Child = (props) => {

    return (
        <div>
            <h1>Child component</h1>
            <button onClick={props.incr}>Increment</button>
            <p>{props.count}</p>
            <button onClick={props.decr}>Decrement</button>
        </div>
    );
}

export default Child;