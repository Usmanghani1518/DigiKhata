import React, { useEffect, useState } from "react";
import axios from "axios"
const Mouse=()=>{
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [data ,setData]=useState([]);
    let username='ali'
    let p={
        username:'jki',
        id:'1',
        phone:'03099656639'
    }
   useEffect(()=>{
axios.get("https://notes-1972f-default-rtdb.firebaseio.com/user.json").then((res)=>{console.log(res)})
   },[])

    window.addEventListener('mousemove', (event) => {
         setX( event.clientX);
        setY ( event.clientY);
      });
    async function post(){
 const response= await  axios.post("https://notes-1972f-default-rtdb.firebaseio.com/user/.json",p);
    console.log(response.data +' error')
}
    return(
        <>
        {/* <h1> this is the mouse function</h1> */}
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center', width:'20px', height:'20px',border:'2px solid yellow',borderRadius:'50%', position:'absolute',transition:'top 1.2s ease , left 2s ease',left:`${x}px`,top:`${y}px`}}> <div style={{width:'5px',height:'5px',backgroundColor:'green',borderRadius:'50%',margin:'auto'}}>
           
            </div>
            </div>
            {
                data.map((a)=>(
                    <div key={a.id}>
                        <h1>{a.userId}</h1>
                     <h3>{a.title}</h3>
                     <p>{a.body}</p>
                    </div>
                 )
                )
            }

<div style={{ backgroundColor:'black',color:'white'}}>
    <ul>
        <li className="item">Home </li>
        <li className="item">About</li>
        <li className="item">Contact</li>
        <li className="item">Appointment</li>
        <li className="item">Services</li>
    </ul>
</div>


<button onClick={post}>post</button>




        </>
    )
}
export default Mouse;