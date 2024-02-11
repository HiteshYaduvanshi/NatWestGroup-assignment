import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='p-5 bg-slate-700'>
            <ul className='flex justify-center items-center'>
                <li className='font-bold text-white mx-5 cursor-pointer'><NavLink to="/NatWestGroup-assignment">Assignment One</NavLink></li>
                <li className='font-bold text-white mx-5 cursor-pointer'><NavLink to="/NatWestGroup-assignment/AssignmentTwo">Assignment Two</NavLink></li>
            </ul>
        </div> 
    </>
  )
}

export default Navbar
