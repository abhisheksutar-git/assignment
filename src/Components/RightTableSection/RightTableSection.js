import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import "./RightTableSection.css"
import Moment from 'moment';

export default function RightTableSection() {

    const [ tableinfo , settableInfo ] = useState([])
    const [ currentPage , setCurrentPage ] = useState(1)
    const [ postperPage , setpostperPage ] = useState(5)

    
    const fetchtableData = async  () => {
        const restable = await axios.get("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01");
        settableInfo(restable.data.data.data)
      
        
    }


    useEffect(() => {
        fetchtableData()
    },[])

    const onChangeSelection = (event) => {
      setpostperPage(event.target.value)
    }


    //get Currrent post

    const indexofLastPost = currentPage * postperPage
    const indexofFirstPost = indexofLastPost - postperPage
    const currentPosts = tableinfo.slice(indexofFirstPost , indexofLastPost )


    //pagination 


    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      

    <div   className='tableContainer'>
      <div className='optionSection' >
        
          <div  className='showEntries' >

            <div  className='showleftmargin'>Show </div>
            <div className='showleftmargin' >
                <select className="form-select" aria-label="Default select example" onChange={onChangeSelection} >
                  
                  <option value="2"> 2 Rows </option>
                  <option value="5"> 5 Rows</option>
                  <option value="10"> 10 Rows </option>
                </select>
            </div>
            <div >
              Entries
            </div>
   
           
            

          </div>

      </div>



            <table className="table">
              
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Days Install</th>
                  <th scope="col">Platform </th>
                  <th scope="col">Day Uninstall </th>
                  <th scope="col">Platform  </th>
                  <th scope="col">Churn Rate </th>
                  <th scope="col">Churn Platform</th>


                </tr>
              </thead>

              {
                 currentPosts.map((element , index ) => {
                  return(

                    <tbody key={index}>
                    <tr>
                    
                      <td> { Moment(element.created_At).format('DD-MM-YYYY') }  </td>
                      <td>{element.totalinstall} </td>
                      <td><div><i class="fa-brands fa-android"></i> {element.android_install} <br /><i class="fa-brands fa-apple"></i> {element.ios_install}</div></td>
                      <td>{element.totaluninstall}</td>
                      <td><div><i class="fa-brands fa-android"></i>15 <br /> <i class="fa-brands fa-apple"></i>5</div></td>
                      
                      <td>30.00%</td>
                      <td><div><i class="fa-brands fa-android"></i>{element.android_churn} <br /> <i class="fa-brands fa-apple"></i> {element.ios_churn}</div></td>
                    </tr>
                    
                  </tbody>

                  )
                })
              }




            
            </table>

            <Pagination postperPage={postperPage} paginate={paginate}  totalPosts={tableinfo.length}  />
      </div>
    </>
  )
}
