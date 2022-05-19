import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions'

const DoctorList = ({search,address}) => {
    const {users,loading}=  useSelector(state=>state)
    const dispatch= useDispatch()
    useEffect(() => {
      dispatch(getUsers())
    }, [search])
    console.log(users)
    const searchResult = users?.filter(doctor=>doctor.specialty.toLowerCase().includes(search.toLowerCase())
    && doctor.adress.toLowerCase().includes(address.toLowerCase())
    )
    console.log(searchResult)
    
  return (
    <div className='doctor-list'>
        {
            loading? <h2>loading...</h2>
            : (!address && !search) ? 
            <h2 className='l1'>Please fill the input fields</h2>
            : searchResult.length==0 ? <h2>Nothing found!</h2>
            : searchResult?.map(el=>
                <div className='doctor-card' >
                  <div className='card'>
                    <div className='box'>
                      <div className='content'>
                    <h2>Name : {el.fullName} </h2>
                    <h3>Email : {el.email} </h3>
                    <h3>Phone : {el.phone} </h3>
                    <h3>Address : {el.adress} </h3>
                    <h3>Postal Code : {el.postalCode} </h3>
                    <h3>Specialty : {el.specialty} </h3>
                    <img className='img' src="https://i.imgur.com/ysSz3Qy.jpg" alt="" /> 
                      </div>
                    </div>
                 </div>
                </div>
                )
        }
    </div>
  )
}

export default DoctorList