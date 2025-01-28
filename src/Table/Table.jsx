import React,{useState} from 'react';

const Table = () => {
    const [first, setFirst] = useState([]);
    const [last, setLast] = useState([]);
    const [age, setAge] = useState([]);
    const [gender, setGender] = useState([]);

  //let tab = document.getElementById('tab');
  let row = document.getElementById('td');
   const submitHandler = (z) =>{
        z.preventDefault();
   }
   const addDetails = () => {
      
   }
   const maleFilter = () =>{
        
   }
   const femaleFilter = () =>{
    
   }
  return (
    <div>
      <form onSubmit={submitHandler}><br/>
        <label htmlFor="">Firstname: </label>&nbsp;&nbsp;
        <input type="text" name="firstname" onChange={(a)=>setFirst(a.target.value)} value={first}/><br /><br />
        <label htmlFor="">Lastname: </label>&nbsp;&nbsp;
        <input type="text" name="lastname" onChange={(a)=>setLast(a.target.value)} value={last}/><br /><br />
        <label htmlFor="">Age: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" name="age" onChange={(a)=>setAge(a.target.value)} value={age}/><br /><br />
        <label htmlFor="">Gender: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select name="gender" id="" onChange={(a)=>setGender(a.target.value)} value='gender'>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select><br /><br />
        <input type="submit" value="Add Details" className='btn btn-outline-success' onClick={addDetails}/>
      </form>
      <br />
     <div>
     <center>
     <table id="table" style={{}}>
        <thead>                 
            <tr>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Age</td>
                <td>Gender</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id='td'>{first}</td>
                <td>{last}</td>
                <td>{age}</td>
                <td>{gender}</td>
            </tr>
            <tr>
             {
              first.map(f =>(<td>{f}</td>))
             }
            </tr>
        </tbody>
    </table><br />
     <input type="radio" name="gender" value="male" onClick={maleFilter}/> :Male &nbsp;&nbsp;
     <input type="radio" name="gender" value="female" onClick={femaleFilter}/> :Female
     </center>
     </div>
    </div>
  )
}

export default Table;