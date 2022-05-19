import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorList from './DoctorList'

const HomePage = () => {
    const [text, setText] = useState("")
    const [address, setAddress] = useState("")
  return (
    
    <div className='home'>
       
  <button className='btn-1'>
        <Link style={{textDecoration:"none",color:"white"}} to="/signUp" >

    Sign UP as a Doctor 
        </Link>
    </button>
    
    <div className='big-cont'>
        
        <div className='nav' >Mednin's Doctors</div>
  <div className='hp'>
      
      <div className='hp1'>
        <input className='input-b' type="text" value={text} onChange={(e)=>setText(e.target.value)}  />
        <input className='input-c' type="submit" value="Specialty"/>
      </div>
      <div className='hp2'>
        <input className='input-b' type="text" value={address} onChange={(e)=>setAddress(e.target.value)}  />
        <input  className='input-c' type="submit" value="Address"/>
      </div>
     
  </div>
  <DoctorList  search={text} address={address}  />
   
        </div>
    </div>
  )
}

export default HomePage