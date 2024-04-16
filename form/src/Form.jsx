import { useState } from "react"

export default function Form(){
    // let [fullname,setFullname] = useState("")
    // let[username,setUsername] = useState("")
    let[formData,setFormData] = useState({
        fullname:"",
        username:"",
        password:"",
    })
    // let handleFullName = (event)=>{
    //     // console.log(event.target.value)
    //     setFullname(event.target.value)
    // }
    // let handleUSername = (event)=>{
    //     setUsername(event.target.value)
    // }
    let handleInputChange = (event)=>{
        // let fieldName = event.target.name;
        // console.log(fieldName)
        // let newValue = event.target.value;
        setFormData((currData)=>{
            // currData[fieldName] = newValue;
            // return{...currData}
            // or 1 

            // return{...currData,[fieldName]:newValue}
            // or2
            return{...currData,[event.target.name]:event.target.value};

        })
    }
    let OnSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullname:"",
            username:"",
            password:""
        })
    }
    return(
        <form action="" onSubmit={OnSubmit}>
            <label htmlFor="fullname">Enter the name</label>
        <input type="text" name="fullname" id="fullname" placeholder="enter full name" value={formData.fullname} onChange={handleInputChange}/>
        <label htmlFor="username">Enter the username</label>
        <input type="text" name="username" id="username" placeholder="enter full name" value={formData.username} onChange={handleInputChange}/>
        <label htmlFor="password">Enter the password</label>
        <input type="text" name="password" id="password" placeholder="enter full name" value={formData.password} onChange={handleInputChange}/>
        
        <button>Submit</button>
        </form>
        
    )
}