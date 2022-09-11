import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./RightUpperSection.css"

export default function RightUpperSection() {

  const [ info , setInfo  ] = useState({})


  const fetchStatsData = async () => {
    const res = await axios.get("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14")
    
    setInfo(res.data.data)
  
  }


  useEffect(() => {
    fetchStatsData()
  }, [])
  

  return (
    <>
      <div className='first-inner-section ' >
        
        <div className=" container  ">
            <div className="row">
                  <div className="col-4">
                      <div  className='cardContainer'>
                          <div className='iConPart' >
                              <i className="fa-solid fa-download"></i>
                          </div>
                          <div className='textPart'  > 
                            <h3>{info.totalInstall}</h3>
                            <p>App Installed</p>
                          </div>
                    </div>
                  </div>

                  <div className="col-4">
                      <div  className='cardContainer'>
                          <div className='iConPart' >
                              <i className="fa-solid fa-download"></i>
                          </div>
                          <div className='textPart'  > 
                            <h3>{info.activeinstall}</h3>
                            <p>Active Install</p>
                          </div>
                    </div>
                  </div>

                  <div className="col-4">
                      <div  className='cardContainer'>
                          <div className='iConPart' >
                              <i className="fa-solid fa-download"></i>
                          </div>
                          <div className='textPart'  > 
                            <h3>{info.churn} %</h3>
                            <p>Churn Rate</p>
                          </div>
                    </div>
                  </div>

                  <div className="col-4">
                      <div  className='cardContainer'>
                          <div className='iConPart' >
                              <i className="fa-solid fa-download"></i>
                          </div>
                          <div className='textPart'  > 
                            <h3>{info.totaluninstall}</h3>
                            <p>App Uninstalled</p>
                          </div>
                    </div>
                  </div>

                  <div className="col-4">
                      <div  className='cardContainer'>
                          <div className='iConPart' >
                              <i className="fa-solid fa-download"></i>
                          </div>
                          <div className='textPart'  > 
                            <h3>{info.aliveappusers}</h3>
                            <p>Aive App Users</p>
                          </div>
                    </div>
                  </div>

                  <div className="col-4">
                      <div  className='cardContainer'>
                          <div className='iConPart' >
                              <i className="fa-solid fa-download"></i>
                          </div>
                          <div className='textPart'  > 
                            <h3>{info.alivechurn}%</h3>
                            <p>Aive Churn Rate </p>
                          </div>
                    </div>
                  </div>
            </div>
          </div>
      
                
      </div>

     
    
    
    </>
  )
}
