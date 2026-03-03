import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { useState } from 'react'

import Usersdata from './components/Userdata.jsx'
import Usersfiled from './components/Usersfiled.jsx'
const App = () => {
  
  const [users, setusers] = useState([])
  const registerUser = (data) =>{
    setusers([...users,data])
  }
  return (
    <div>
      <h2 className='text-center mt-3'>Register User Data</h2>
      <Usersfiled register={registerUser}/>
      <Usersdata userDetails={users}/>
    </div>
  )
}

export default App