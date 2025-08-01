const { useState } = require("react");

function Counter(){
    const [count, setCount] =useState(0);

    const increment=()=>{
        setCount(count+1);
        hello();
    }
    const decrement=()=>{
        setCount(count-1);
    }

    const hello=()=>{
        alert("Hello! Counter Incremented!");
    }

    const showWelcome=(text)=>{
        alert(`${text}`);
    }
    return(
        <> 
        <h1>Counter is: <b>{count}</b></h1>
        <button onClick={increment}>Increment</button>
        <br/>
        <button onClick={decrement}>Decrement</button>
        <br/>
        <button onClick={() => showWelcome("Welcome!")}>Say Welcome</button>
        <br/>
        <button onClick={() => alert("I was Clicked!")}>Click On Me</button>
        </>
    );
}
export default Counter;