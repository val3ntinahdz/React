import StaticComponent from './components/StaticComponent/StaticComponent'
import { useState } from 'react'
import './App.css'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <StaticComponent />

      <UserListWithLoading />  

      {/* <UserList />  */}
    </>
  )
}

export default App
