"use client"
import axios from "axios";
import { useState } from "react";


export default function SignupComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function singupReq(){
    const response = await axios.post("http://localhost:3001/api/user/signup",{
      username:username,
      password:password
    })
    return response
  }
  
  return (
   <div className="flex items-center justify-center h-screen ">
    <div className="border">
      <input onChange={(e)=>{
        setUsername(e.target.value)
      }} className="p-4" type="text" placeholder="username"/> <br />
      <input onChange={(e)=>{
        setPassword(e.target.value)
      }}  className="p-4" type="text" placeholder="password" /> <br />
      <button onClick={()=>{
        singupReq()
      }} className="p-4 items-center">signup</button>
    </div>
   </div>
  )
}
