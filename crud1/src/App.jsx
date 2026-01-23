import { useState } from 'react'
import './App.css'

function App() {
  
  const users = [
    {id: 1, nom: "john", age: 18, email: "john@gmail.com"},
    {id: 2, nom: "jane", age: 20, email: "jane@gmail.com"},
    {id: 3, nom: "james", age: 17, email: "james@gmail.com"}
  ]



  const [userList, setUserList] = useState(users);

  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  /* const [isEditing, setIsEditing] = useState(false); */
  const [idEdit, setIdEdit] = useState(null);


  const handleSubmit = e => {

    e.preventDefault();

    if(idEdit !== null){
      setUserList([...userList.map(u => u.id == idEdit ? {...u, nom, age, email} : u)]);
      setIdEdit(null);
      /* setIsEditing(false); */
    }
    else{

      const newUser = {
        id: userList.length+1,
        nom: nom,
        age: age,
        email: email
      }

      setUserList([...userList, newUser]);
    }


    setNom("");
    setAge("");
    setEmail("");

  }

  const handleDelete = (id) => {
    setUserList([...userList.filter(u=> u.id!=id)]) 
  }

  const handleUpdate = (userToEdit) => {
    /* const userToEdit = userList.find(u => u.id == id); */
    setNom(userToEdit.nom);
    setAge(userToEdit.age);
    setEmail(userToEdit.email);
    setIdEdit(userToEdit.id);

    /* setIsEditing(true) */

  }

  return (
    <>
    
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nom</label>
          <input type="text" 
            value={nom}
            onChange={e => setNom(e.target.value)}/>
            {/* {nom.length < 4 ? "name must have 4 chars" : ""} */}
        </div>
        <div>
          <label>Age</label>
          <input type="text" 
            value={age}
            onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" 
            value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <button style={{background:"blue",color:"white"}}>
         {/*  {isEditing ? "Modifier" : "Ajouter"} */}
          {idEdit !== null ? "Modifier" : "Ajouter"}
        </button>
      </form>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {
          userList.map(u => 
             <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nom}</td>
              <td>{u.age}</td>
              <td>{u.email}</td>
              <td>
                <button
                    style={{background:"orange"}}
                    onClick={() => handleUpdate(u)}
                  >Modifier</button>
                <button
                  style={{background:"red"}}
                  onClick={() => handleDelete(u.id)}
                  >Supprimer</button>
              </td>
            </tr>
          )
         }
        </tbody>
      </table>
    </>
  )
}

export default App
