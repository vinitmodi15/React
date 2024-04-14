import { useState } from "react";

export default function Button(){
    // let count =0;
    let [count,setCount] = useState(0); //it return array which has 2 values.
    function inCount(){
        // count +=1;
        setCount(count = count+1);
        console.log(count);
    }
    return (
        <>
            <h3>{count}</h3>
            <button onClick={inCount}>Click Me</button>
        </>
    )
}