import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import './Forget.css'

const Congrats = () => {
  return (
    <div className='congrats-page'>
      <h3 className="page-heading">Password successfully updated...!</h3>
      <div className='next-page'><NavLink to={'/admin'} className='navlink'>Next<GrLinkNext /></NavLink></div>
    </div>
  )
}

export default Congrats
