import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTenant = () => {
    const teleport = useNavigate();
  const [name, setName] = useState('');
  const [contact,setContact]= useState('');
  const [address,setAddress]= useState([]);
  const NewTenant = () =>{
    axios({
        method: 'POST',
        url: 'http://localhost:4000/Tenants',
        data: {
            "Name" : name,
            "ContactNumber" : contact,
            "Address" : [address]
            }
      }).then(()=>{
        alert("ADDED !")
      });  
    }
  return (
      <div className="bg-text">
      <div className="mx-auto">
       <div className="mt-5">
       <div className="w-25 mx-auto">
        <h3 className=".text-warning-emphasis text-center"><i className='display-6'>Add Tenant</i></h3>
        <label htmlFor="" className=''><h6>Name Of Tenant</h6> </label>
        <input type="text" onChange={(z)=>{setName(z.target.value)}} required placeholder="" className="form-control" />
        <label htmlFor=""  className=''><h6>Contact Number</h6> </label>
        <input type="text" onChange={(z)=>{setContact(z.target.value)}} required className='form-control'/>
        <div className="mb-3">
           <label htmlFor="Textarea1" className=''><h6>Address</h6></label><br />
           <textarea className="form-control" onChange={(z)=>{setAddress(z.target.value)}} id="Textarea1" rows="5"></textarea>
       </div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-outline-info mt-2" onClick={NewTenant}>Submit</button>
        </div>
        </div>
          <button className='btn btn-dark mt-2 mx-3 skip-backward-btn' onClick={()=>{teleport('/dashboard')}}>&#9666;Back</button>
        </div>
    </div>
    </div>
  )
}

export default AddTenant;