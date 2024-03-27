import Child from './child';

const Parent = (props) => {
    
    return (
        <div>
            <h1>Parent component</h1>
            
            <Child count={props.count} incr={props.incr} decr={props.decr} />
        </div>
    );
}

export default Parent;