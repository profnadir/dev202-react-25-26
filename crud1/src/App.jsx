import { useState } from 'react'
import './App.css'
import Users from './components/Users';
import UserForm from './components/UserForm';

function App() {

  const users = [
    { id: 1, nom: "john", age: 18, email: "john@gmail.com" },
    { id: 2, nom: "jane", age: 20, email: "jane@gmail.com" },
    { id: 3, nom: "james", age: 17, email: "james@gmail.com" }
  ]

  const [userList, setUserList] = useState(users);

  const [userToEdit, setUserToEdit] = useState(null);

  const handleSubmitApp = user => {
    if(user.id){
      setUserList([...userList.map(u => u.id == user.id ? {...user} : u)]);
      setUserToEdit(null)
    }else{
      setUserList([...userList, { ...user, id: userList.length + 1 }]);
    }
  }

  const handleDeleteApp = id => {
    setUserList([...userList.filter(u => u.id != id)])
  }

  const handleEditApp = user => {
    setUserToEdit(user);
  }

  return (
    <>
      <UserForm handleSubmitApp={handleSubmitApp} userToEdit={userToEdit}/>
      <hr />
      <Users users={userList} handleDeleteApp={handleDeleteApp} handleEditApp={handleEditApp}/>
    </>
  )
}

export default App
