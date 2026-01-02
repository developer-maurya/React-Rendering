import LogOut from './Component/LogOut'
import Login from './Component/Login';
import { useState } from 'react'
import './App.css'

function App() {
  const [isLogOut ,setLogOut] =useState(false);


  return(
    <div>
      {isLogOut ?  <Login/> : <LogOut/>}
    </div>
  )

  // if(isLogOut){
  //   return (
  //     <LogOut/> 
  //   )
  // }
  //   else {
  //     return(
  //       <Login/>
  //     )

  //   }

}

export default App

