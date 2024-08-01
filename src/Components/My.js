import React from 'react';
import './My.css';
import { Link } from "react-router-dom";
import backgroundimage from '../assets/Farewell1.PNG';

function My() {
  const backgroundImageStyle={
    backgroundImage:`url(${backgroundimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition:330,
    borderTopLeftRadius:'50%',
    borderBottomLeftRadius:'50%'
  };
  return (
    <div className="t" style={backgroundImageStyle}>
      <h2>GUDDATI DHARSHINI</h2>
      <h3>
        Hi all I'm Dharshini  </h3>
      <p>
        A passionate Front End Developer 
         having an 
      </p> 
      <p>experience of building Web applications with </p>
      <p>JavaScript/React.js/Node.js and some other </p>
      <p>cool libraries and frameworks</p>
      <p>
        <a href="https://github.com/Dharshini310">
          <img src="data:image/png;base64,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" alt="loading.." id='png' />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/guddati-dharshini-5ab442253/">
          <img src="data:image/jpeg;base64,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" alt="loading.." id="png"/>
        </a>
      </p>
      <p>
        <Link to="/details/contact"><button id="uy">Contact</button></Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/details/resume"><button id="uy">See My Resume</button></Link>
      </p>
    </div>
  );
}

export default My;