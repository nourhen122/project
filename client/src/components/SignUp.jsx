import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions'


const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [certificate, setCertificate] = useState('')
    const [specialty,setSpecialty] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
       e.preventDefault ();
       const newUser ={
           fullName,
           email,
           password,
           phone,
           address,
           postalCode,
           certificate,
           specialty
       }
       dispatch(registerUser(newUser))
      }
      return (
    <div className='Sign-Up' >
      <div className='container'>

      <div className='Title'>Registration</div>
        <form > 
          <div className='champ-cont'>

            <label className='sp'>FullName : </label>
            <input className='input-box' type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
          </div>
          <div className='champ-cont'>
            <label  className='sp'>Email : </label>
            <input className='input-box' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          <div className='champ-cont'>
            <label  className='sp'>Password : </label>
            <input className='input-box' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className='champ-cont'>
            <label  className='sp'>Phone : </label>
            <input className='input-box' type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <div className='champ-cont'>
            <label  className='sp'>Address : </label>
            <input className='input-box' type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
          </div>
          <div className='champ-cont'>
            <label  className='sp'>PostalCode : </label>
            <input className='input-box' type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}/>
          </div>
          <div className='champ-cont'>
            <label  className='sp' >Certificate : </label>
            <input className='input-box' type="text"value={certificate} onChange={(e)=>setCertificate(e.target.value)} />
          </div>
          <div className='champ-cont'>
            <label  className='sp'>Specialty : </label>
            <input className='input-box' type="text"value={specialty} onChange={(e)=>setSpecialty(e.target.value)} />
          </div>
            <button className='btn' onClick={handleSubmit}>Confirm</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp