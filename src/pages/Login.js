import React, { useState } from 'react';
import './Signup.css';
import svg2 from '../assets/svg-2.svg';

import { useNavigate } from 'react-router-dom';
// import { Stars, OrbitControls } from '@react-three/drei';
// import { Canvas,useFrame } from '@react-three/fiber';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Your signup logic here
  }

  return (
    <div className="signup">
        <img src={svg2} alt="image" className='image-svg'></img>
        {/* <Canvas className="canvas">
            <Stars/>
      </Canvas> */}
      <div className='form-wrapper'>
        <form onSubmit={handleSignup}>
            <h2 className='heading'>Log In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
  
        <button type="submit" className='form-submit' >Log In</button>
      </form>
      </div>
    </div>
  );
}




export default Login;
