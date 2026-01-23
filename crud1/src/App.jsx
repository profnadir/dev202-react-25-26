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

  const handleSubmitApp = user => {
    setUserList([...userList, { ...user, id: userList.length + 1 }]);
  }

  const handleDeleteApp = id => {
    setUserList([...userList.filter(u => u.id != id)])
  }

  return (
    <>
      <UserForm handleSubmitApp={handleSubmitApp}/>
      <hr />
      <Users users={userList} handleDeleteApp={handleDeleteApp}/>
    </>
  )
}

export default App
