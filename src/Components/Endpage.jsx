import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Endpage() {
  const {id} = useParams();
  const {ab} = useParams();
  
const availbeds=()=>{
    axios({
      method:'post',
      url:`http://localhost:4000/Hostels?id=${id}&AvailableBeds=${ab}`,
      data: {
          "AvailableBeds": ab,
          "id": id
      }
    }).then(()=>{
      alert('POSTED')
    })
   }

  return (
  <div style={{backgroundColor:'beige'}}> 
  <div className='bg-text' style={{backgroundColor:"lightblue"}}>
        <div className='d-flex justify-content-center mx-5 my-5 p-3'>
        <h1>
        Thank you!
        Visit Again
        </h1>
        <br/> 
    </div>
    <div className='d-flex justify-content-center mb-5'>
    <Link to={'/'} onClick={availbeds}>Back to Homepage</Link>
    </div>
  </div>
  </div>
  )
}

export default Endpage;

// axios.post('/Hostels', {
  //   AvailableBeds : ab
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });