import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import UserList from './UserList'
import AddUser from './AddUser'

function App() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Carol V",
      email: "carol_v@gmail.com"
    },
    {
      id: 2,
      name: "Roger F",
      email: "roger_f@gmail.com"
    },
    {
      id: 3,
      name: "Peter P",
      email: "peter_p@gmail.com"
    }
  ]);

  const addUserHandler = (newUser) => {
    newUser.id = userList.length > 0 ? userList[userList.length - 1].id + 1 : 1; //userList[3 - 1] --> userList[2]
    setUserList([...userList, newUser]);
  }

  const deleteUserHandler = (userId) => {
    const newUsers = userList.filter(
      (user) => user.id != userId
    );
    setUserList(newUsers);
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserList userList={userList} deleteUserHandler={deleteUserHandler} />} />
        <Route exact path="/add" element={<AddUser addUserHandler={addUserHandler} />} />
      </Routes>
    </Router>
  )
}

export default App
