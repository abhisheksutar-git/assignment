import React from 'react'
import "./App.css"
import RightSide from './Components/RightSide/RightSide'
import SideBar from './Components/SideBar/SideBar'

export default function App() {
  return (
    <>
     <div className='main-background' >
          <SideBar />
          <div>
          <RightSide />
          </div>
         
     </div>
    </>
  )
}
