import React from 'react'
import c from './SearchResult.module.scss'
import { useNavigate } from 'react-router-dom'

const SearchResult = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className={c.res}>
      {
        data?.map(item => (
          <>
            <div className={c.res_card} onClick={()=> navigate(`/doctor/${item.id}/`)}>
              <img src={item.image} alt="doctor" />
              <p>{item.full_name}</p>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="464" height="2" viewBox="0 0 464 2" fill="none">
              <path d="M0 1L464 1.00004" stroke="white" stroke-opacity="0.5" />
            </svg>
          </>
        ))
      }
    </div>
  )
}

export default SearchResult
