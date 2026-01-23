
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState({});
  const [id, setId] = useState(1);

  // API


  ////fonction

  //axios : syn

  /* useEffect(function() {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {setUsers(res.data); console.log("test");})
  }
    ,[]) */

  //axios :async

  /*    useEffect(function() {
  
      const getData = async function(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data)
      }
    
      getData();
    }
      ,[]) */

  //fetch : syn

/*   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {return response.json() })
    .then((users) => { setUsers(users) })
  },[]) */


  //fetch : async

   useEffect(()=>{
   const  getData = async() => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const users = await response.json();
      setUsers(users)
   }
   getData();
  },[id])

  ////class

  //axios : syn + async

  //fetch : syn + async

  return (
    <>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      {users.name} - {users.email}
      {/*<h1>Users : {users.length}</h1>
       <ul>
        {
          users.map(u => <li key={u.id}>{u.name}</li>)
        }
      </ul> */}
    </>
  )
}

export default App
