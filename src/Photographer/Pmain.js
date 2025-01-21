import React from 'react';
import { Link } from 'react-router-dom';
import "./Pmain.css";

function Pmain() {

  return (
    <div className='container-basic'>
      <h1>I take a lot of phtos!</h1>
      <Link to="/Photographer/Wedding">Wedding</Link>
    </div>
  );
}

export default Pmain;