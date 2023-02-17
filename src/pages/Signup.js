import React, { useState } from 'react';
import './Signup.css';
import svg from '../assets/undraw_finance_re_gnv2.svg';
import axios from 'axios';
// import { Stars, OrbitControls } from '@react-three/drei';
// import { Canvas,useFrame } from '@react-three/fiber';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const handleApi = () => {
    // console.log({ email, fname, lname, password })
    axios.post('http://127.0.0.1:8000/accounts/register/', {
      
        email: email,
        First_name: fname,
        Last_name: lname,
        password: password,
      
    }).then(result => {
         alert('success')
    
    })
        .catch(error => {
            alert('service error')
            console.log(error)
        })
    // navigate('/Getnews');
}


  return (
    <div className="signup">
        {/* <Canvas className="canvas">
            <Stars/>
      </Canvas> */}

       <img src={svg} alt="image" className='image-svg'></img>
      <div className='form-wrapper'>
      <h1 className='heading'>Welcome to Dyme</h1>
      {/* onSubmit={handleSignup} */}
        <form >
            <h2 className='sign-up'>Sign Up</h2>
      <div className="form-group">
  
          <label htmlFor="First_name">First Name:</label>
          <input type="text" id="fname" name="fname"  onChange={(e) => setFname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="Last_name">Last Name:</label>
          <input type="text" id="lname" name="lname" onChange={(e) => setLname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} required />
        </div>
  
        <button type="submit" className='form-submit' onClick={handleApi} >Sign Up</button>
   
      </form>
      </div>
    </div>
  );
}




// // export default Signup;
// import React, { useState,useEffect } from 'react'
// import { Grid, Paper, TextField, Checkbox, FormGroup, FormControlLabel, Button, Link } from '@mui/material';
// import './Signup.css';
// import { Router, useNavigate } from 'react-router-dom'

// import axios from 'axios';


// function Signup() {



    
//     const [email, setEmail] = useState('')
//     const [fname, setFname] = useState('')
//     const [lname, setLname] = useState('')
//     const [password, setPassword] = useState('')
//     const [category,setCat] =useState('')
//     const [address,setAdd] =useState('')
//     const [phone,setPhone] =useState('')

//     const navigate = useNavigate()


   
//     const handleEmail = (e) => {
//         setEmail(e.target.value)
//     }
//     const handleFname = (e) => {
//         setFname(e.target.value)
//     }
//     const handleLname = (e) => {
//         setLname(e.target.value)
//     }

//     const handlePassword = (e) => {
//         setPassword(e.target.value)
//         console.log(e.target.value)
//     }
    
//     const handleAddress =(e)=>{
//         setAdd(e.target.value)
//     }
//     const handlePhone =(e)=>{
//         setPhone(e.target.value)
//     }
//     const handleApi = () => {
//         console.log({ email, fname, lname, password,category,address,phone })
//         axios.post('http://127.0.0.1:8000/accounts/register/', {
          
//             email: email,
//             First_name: fname,
//             Last_name: lname,
//             password: password,
          
//         }).then(result => {
//              alert('success')
        
//         })
//             .catch(error => {
//                 alert('service error')
//                 console.log(error)
//             })
//         // navigate('/Getnews');
//     }


//     const Dropdown = () => {
        
      
//         const handleOptionChange = (event) => {
//           setCat(event.target.value);
//         };
             
//         return (
//           <div>
//             <select label= 'category' value={category} onChange={handleOptionChange}>
//               <option value="Client" >Client</option>
//               <option value="Worker" >Worker</option>
//               <option value="Admin" >Admin</option>
//             </select>
//             <p>Selected Option: {category}</p>
//           </div>
//         );
//       };
      
      
    
//     return (
//         <Grid>
//             <Paper elevation={10} className="paper" >
//                 <Grid>
//                     <h2 className='heading-login'>Sign Up</h2>
//                 </Grid>
//                 <>
//                     <Grid className='form-group'>
//                         <TextField id="outlined-basic" label="email" onChange={handleEmail} variant="outlined" placeholder='enter email' fullWidth required />
//                     </Grid>
//                     <Grid className='form-group'>
//                         <TextField id="outlined-basic" label="First Name" onChange={handleFname} variant="outlined" placeholder='enter First Name' fullWidth required />
//                     </Grid>
//                     <Grid className='form-group'>
//                         <TextField id="outlined-basic" label="Last Name" onChange={handleLname} variant="outlined" placeholder='enter Last Name' fullWidth required />
//                     </Grid>
//                     <Grid className='form-group'>
//                         <TextField id="outlined-basic" label="Password" onChange={handlePassword} variant="outlined" placeholder='enter Password' fullWidth required />
//                     </Grid></>
//                     {/* <Grid className='form-group'>
//                         <TextField id="outlined-basic" label="City" onChange={handleAddress} variant="outlined" placeholder='City' fullWidth required />
//                     </Grid> */}
                

//                 <Grid className='form-group'>
//                     <div className='signin-btn'>
//                         <Button variant="contained" onClick={() => handleApi()} fullWidth >Sign Up</Button>
//                     </div>
//                 </Grid>
//             </Paper>
//         </Grid>
//     );
// }
// export default Signup;