import StaticComponent from './components/StaticComponent/StaticComponent'
import './App.css'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'
import FilterUsers from './components/FilterUsers/FilterUsers'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <StaticComponent />

      {/* <UserListWithLoading />  */}

      <FilterUsers />


      {/* <UserList />  */}
    </>
  )
}

export default App
