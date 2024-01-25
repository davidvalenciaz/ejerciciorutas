import { useState } from "react"

const users =[
  "jaime",
  "diber",
  "rios",
  "isaac"
]


 export function Buscar() {

  const buscar = () => {
    [search,setSearch ] = useState("")
    const handleBuscar = {name} => {
      if(name .target.value === ""){
        console.log("no hay valor ")
      }
    }


  return (
    <div className="container">
      <h1>opcion buscar</h1>
      <input type="text" name="search" placeholder="buscar usuarios" onChange={handleBuscar} />
      <ul>
        {users.map((user,i)=>
        <li key={i}>{user} </li>
        )


      </ul>
    </div>
  )
}

export default Buscar