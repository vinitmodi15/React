import { useState } from "react"


export default function Likebutton(){
    let [isLiked,setIsLiked] = useState(false);
    let[click,setClick] = useState(0);
    let style= {
        color:"red",
    }
    let toggling = ()=>{
        // console.log("like was clciked");
        setIsLiked(!isLiked);
        setClick(click+=1);
    }
    return(
    
        <div >
            <p>Clicks:{click}</p>
            <p onClick={toggling}>
                {
                isLiked?<i className="fa-solid fa-heart" style={style}></i>:<i className="fa-regular fa-heart"></i>
                }
            </p>
            {/* <p>{isLiked.toString()}</p> */}
            {/* <p onClick={toggling}><i className="fa-regular fa-heart"></i></p> */}
        </div>
   
    )
}