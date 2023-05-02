import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const Login =()=>{
    const teleport = useNavigate();
    const [login, setLogin] = useState([]);
    const [username, setUsername] = useState([]);
    const [pass, setPass] = useState([]);

    const myform = useFormik({
      initialValues:{
          username:'',
          password:''
      },
      validationSchema:Yup.object({
          username:Yup.string().max(20).required("*Username is a required field"),
          password:Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,"given password is not in the required format").required("*Password is a required field")
      }),
      onSubmit:(values)=>{
        console.log(values)  
        teleport('/booking');
      }
  })

const user = () =>{
      axios.get("http://localhost:4000/Signup?Username=Username&Password=Password").then((res)=>{
        alert("Sign-In Successful !")
          setLogin([...res.data]);
          teleport('/booking'); 
       }).catch(function (error){
        alert("Please enter correct login details",error)}
        )      
}
const inputHandler=(z)=>{
   if(!z.target.value===''){
     teleport('/booking');
   }
}

    return(
    <div className="bg-text border rounded">
    <div className="mx-auto">
    <div className="mt-5">
    <div className="w-25 mx-auto" onSubmit={myform.handleSubmit}>
        <form className="form-control bg-primary-subtle">
            <h3 className=".text-warning-emphasis text-center">Login</h3>

            <label htmlFor="username" className="form-lable mt-2 text-primary fw-bold" >Username</label>
            <input type="text" name="username" id="username" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.username} placeholder="Enter username" className="form-control" />
            <p className="text-danger">{myform.touched.username && myform.errors.username}</p>

            <label htmlFor="password" className="form-lable mt-2 text-primary fw-bold">Password</label>
            <input type="password" name="password" id="password" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.password} placeholder="Enter password" className="form-control"/>
            <p className="text-danger">{myform.touched.password && myform.errors.password}</p>

            
            <div className="mt-2">
            <Link to="/mail" className="text-decoration-none"><p>Forgot Password?</p></Link>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-2" id="liveAlertBtn" onClick={inputHandler} onSubmit={user} >Login</button>
            </div>
        </form>
        <Link to="/signup" className="text-light">Don't have an account yet?(SignUp)</Link>
    </div>
    </div>
    </div>
    </div>
    )
}; 

export default Login;

// GET /posts?title=json-server&author=typicode
// GET /posts?id=1&id=2
// GET /comments?author.name=typicode

// axios({
//   method: 'GET',
//   url: 'http://localhost:4000/Signup',
//   data: {
//         "Username": username,
//         "Password": pass
//       }
// }).then(()=>{
//   console.log(username);
//   console.log(pass);
// });  