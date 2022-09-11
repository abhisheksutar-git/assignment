import React from 'react'
import "./SideBar.css"

const SidebarData = [
  {
      icon : "fa-sharp fa-solid fa-house-user",
      heading : "Dashboard",
  },
  {
      icon : "fa-solid fa-video",
      heading : "Video",
  },
   {
      icon : "fa-solid fa-image",
      heading : "Images",
   },
    {
      icon : "fa-solid fa-sign-hanging",
      heading : "Products",
    },
    {
      icon : "fa-sharp fa-solid fa-person-from-portal",
      heading : "Exit"
    },
]


export default function SideBar() {
  return (
    <>
      
      <div className='container' >
              <div className='innerBackGround' >
                  <div className='profile_section'>
                          <div className='logoSec'>
                          <i className="fa-brands fa-slack logo"></i> <span>WOW</span>  
                          </div>
                          <div>
                          <i class="fa-solid fa-right-from-bracket"></i>
                          </div>
                  </div>
                  
              <div >
              <div className='sidebarList' >

                  {

                        SidebarData.map((itex, index) => {
                          return(
                            <div className='tabs' key={index}>
                            <i className={itex.icon}  ></i><span> {itex.heading}</span>
                            </div>
                          )
                        })
                  }

                    
              </div>
                  </div>


              </div>
            
          </div>


    </>
  )
}
