import { useState } from "react"

export default function Ludoboard(){
    let[moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    let [arr,setArr] = useState(["no moves"]);
    let updateBlue = ()=>{
        // moves.blue+=1;
        // console.log(`moves.blue:${moves.blue}`)
        // setMoves({...moves,blue:moves.blue+1}); //moves array jo hai vo spread hokr ek nye array m aajaye individually har ek value and koi updation chaiye hota hai to fr apn usse ese bhjte hai
        //moves array as it is nye array m aajaye and blue ki value ese update hojaaye
    //    arr.push("move blue");
    //    console.log(arr);
        setArr([...arr,"blue moves"]);

    }
    return(
        <div>
            <p>Game begins</p>
            <p>{arr}</p>
            <p>Blue moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow" ,color:"black"}}>+1</button>
            <p>Red moves={moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>Green moves={moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
        </div>
    )
}