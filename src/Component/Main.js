import React from 'react';
import "./Main.css";
import { FaLinkedin,FaGithub, FaReact, FaVuejs, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaLinux } from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpring } from "react-icons/si";


function MainPage() {

  return (
    <div className="Main">
      <div className='container-intro'>
        <h2>Bugs are crafty, lens caps are slippery — good thing I’m a professional at both hide-and-seek and keeping track.</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/Portrait-P.jpg`}
          alt="Profile"
          className="image-circle standalone"
        />
        <div className="container-icon">
          <FaReact className="icon" title="React" />
          <FaVuejs className="icon" title="Vue.js" />
          <FaNodeJs className="icon" title="Node.js" />
          <FaPython className="icon" title="Python" />
          <FaJava className="icon" title="Java" />
          <SiSpring className="icon" title="Spring" />
          <img
            src={`${process.env.PUBLIC_URL}/images/Portrait-P.jpg`}
            alt="Profile"
            className="image-circle in-container"
          />
                    <SiMysql className="icon"  title="MySQL" />
          <SiMongodb className="icon" title="MongoDB" />
          <FaAws className="icon" title="AWS" />
          <FaDocker className="icon" title="Docker" />
          <FaLinux className="icon" title="Linux" />
          <FaGithub className="icon" title="GitHub" />
        </div>

        <h1 style={{ marginBottom: '2%' }}>Hi, I'm Shuli.</h1>
        <p style={{ textAlign: 'center', marginBottom: '0' }}>I <a href="/Portfolio/#/Developer">build websites</a> that make life clear.</p>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>I <a href="/Portfolio/#/Photographer">capture moments</a> that spread cheer.</p>
      </div>

      <div className="container-basic">
        <div className="container-main">
        <h1 style={{background: 'linear-gradient(to bottom, transparent 50%, #E6ECF0 50%', marginBottom: '4%' }}>Hire Me!</h1>
          <p>• I’m actively seeking a full-time Junior Software Developer role anywhere in Ontario, Canada, including remote opportunities.</p>
          <p>• I have hands-on experience in full-stack development, database management, and version control  — skills I’ve applied to projects that solve real problems (and occasionally something just for fun).</p>
          <p>• While I may not tick every box for a role, I’m a quick learner, a careful listener, detail-oriented, and focused on execution, not excuses.</p>
          <p style={{ marginBottom: '0' }}>• I’m flexible — open to travel, on-call duties, and any extra effort needed to contribute meaningfully.</p>
        </div>
        <a
          href="https://www.linkedin.com/in/shuli-wang-uottawa/" // Replace with your LinkedIn profile URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security with target="_blank"
          style={{ textDecoration: 'none' }} // Optional: Remove underline from the link
        >
          <button className='button-linkedin'>
            <FaLinkedin style={{ marginRight: '10px', fontSize: '24px' }} />
            @shuli-wang-uottawa
          </button>
        </a>
      </div>
    </div>
  );
}

export default MainPage;