import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Mail=()=> {
  var teleport = useNavigate();
const myform = useFormik({
  initialValues:{
    mail:''
  },
  validationSchema:Yup.object({
    mail:Yup.string().max(30).matches('@').required('*Please enter a vaild email address')
  }),
  onSubmit:(values)=>{
    console.log(values);
    teleport('/verify');
  }
})
const inputHandler=(z)=>{
  if(!z.target.value===''){
    teleport('/verify');
   // alert("*Please enter in I/P field")
  }
}
  return (
    <div class='bg-text'>
      <div className="w-25 mx-auto">
        <form className='form-control' onSubmit={myform.handleSubmit}>
        <label htmlFor="mail" className="form-lable mt-2 text-success">Email Address/Phone:</label>
        <input type="mail" name='mail' id='mail' placeholder='Enter mail or phone' onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.mail} className='form-control'/><br/>
        <p className='text-danger'>{myform.touched.mail && myform.errors.mail}</p>
        <button type='submit' onClick={inputHandler} className="btn btn-outline-primary">Send OTP/ Verification Link</button>
        </form>
        </div>  
    </div> 
  )
}

export default Mail;