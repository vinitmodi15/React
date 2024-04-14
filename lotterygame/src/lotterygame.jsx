import { useState } from "react"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket"

export default function Lottery({n=3,WinningSum=15}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket)===WinningSum; 
    let buyTicket = ()=>{
        setTicket(genTicket(n))
    }
    //if it return true then we are going to pront the congratulations
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
                <button onClick={buyTicket}>New Ticket</button>
            </div>
            <h2>{isWinning && "Congratulations,you won"}</h2>
        </div>
    )
}