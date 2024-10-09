import axios from "axios";

async function userDatails(){
    const res = await axios.get("http://localhost:3001/api/user")
    return res.data
}
export default async function Home(){
    const data  = await userDatails()
    return (
        <div className="capitalize">
           name: {data.name} <br />
           age: {data.age}
        </div>
    )
}