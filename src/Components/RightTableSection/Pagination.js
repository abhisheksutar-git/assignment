import React from 'react'
import "./Pagination.css"

export default function Pagination({postperPage , paginate , totalPosts  }   ) {
    const pageNumber = []

    for ( let i=1 ; i <= Math.ceil(totalPosts / postperPage ) ; i++) {
        pageNumber.push(i)
    }

  return (
    <div className='listing'>
      <nav>
        <ul>
            {   
                pageNumber.map(number => (
                    <li key={number} >
                           <div className='numbers'>
                                <a href="!#" onClick={() => paginate(number)} >  {number} </a>
                           </div>
                    </li>
                ) )
            }
        </ul>
      </nav>
    </div>
  )
}
