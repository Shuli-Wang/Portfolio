import React from 'react';
import "./Main.css";
import { FaLinkedin, FaGithub, FaReact, FaVuejs, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaLinux } from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpring } from "react-icons/si";
import { motion } from "framer-motion";

function MainPage() {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="Main">
      <div className='container-intro'>
        <h2>Bugs are crafty, lens caps are slippery — good thing I’m a professional at both hide-and-seek and keeping track.</h2>

        <img
          src={`${process.env.PUBLIC_URL}/images/Portrait-P.jpg`}
          alt="Portrait of Shuli Wang"
          className="image-circle standalone"
        />

        <motion.div
          className="container-icon"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.a
            className="icon"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="React logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaReact aria-hidden="true" />
          </motion.a>
          <motion.a
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            role="img"
            aria-label="Vue.js logo"
            tabIndex="0"
            variants={iconVariants}>
            <FaVuejs aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="Node.JS logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaNodeJs aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="python logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaPython aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://www.java.com/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="Java logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaJava aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://spring.io/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="Spring logo"
            tabIndex="0"
            variants={iconVariants} >
            <SiSpring aria-hidden="true" />
          </motion.a>

          <img
            src={`${process.env.PUBLIC_URL}/images/Portrait-P.jpg`}
            alt="Portrait of Shuli Wang inside skills container"
            className="image-circle in-container"
          />
          <motion.a
            className="icon"
            href="https://www.mysql.com"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="MySQL logo"
            tabIndex="0"
            variants={iconVariants} >
            <SiMysql aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="MongoDB logo"
            tabIndex="0"
            variants={iconVariants} >
            <SiMongodb aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="AWS logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaAws aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="Docker logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaDocker aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://www.linux.org"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="Linux logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaLinux aria-hidden="true" />
          </motion.a>
          <motion.a
            className="icon"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            role="img"
            aria-label="GitHub logo"
            tabIndex="0"
            variants={iconVariants} >
            <FaGithub aria-hidden="true" />
          </motion.a>
        </motion.div>

        <h1 style={{ marginBottom: '12px' }}>Hi, I'm Shuli.</h1>
        <p style={{ textAlign: 'center', marginBottom: '0' }}>
          I build websites that make life clear.{' '}
          <a href="/Portfolio/#/Developer" aria-label="Go to Developer Portfolio">
            <i className="fa fa-compass" aria-hidden="true"></i>
          </a>
        </p>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          I capture moments that spread cheer.{' '}
          <a href="/Portfolio/#/Photographer" aria-label="Go to Photographer Portfolio">
            <i className="fa fa-camera-retro" aria-hidden="true"></i>
          </a>
        </p>
      </div>

      <div className="container-basic">
        <div className="container-main">
          <h1 style={{ background: 'linear-gradient(to bottom, transparent 50%, #E6ECF0 50%', marginBottom: '30px' }}>Skills & Style</h1>
          <p>• I’m a Web Developer based in Ontario, Canada, with hands-on experience in Full-stack Development, Database Management, and DevOps.</p>
          <p>• I enjoy building things that solve real-world problems: whether it’s a practical tool, a creative idea, or something just for fun:D</p>
          <p>• I'm always open to learning, collaborating, and exploring new technologies.</p>
          <p style={{ marginBottom: '0' }}>
            • Curious about how I work? Check out my{' '}
            <a
              href="https://drive.google.com/file/d/1ee4nX_0caRdIchjAUCQjd88nStWMFP_b/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open résumé in Google Drive"
            >
              Résumé
            </a>, and let’s connect!
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/shuli-wang-uottawa/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          aria-label="Visit Shuli Wang's LinkedIn profile"
        >
          <button className='button-linkedin'>
            <FaLinkedin style={{ marginRight: '10px', fontSize: '24px' }} aria-hidden="true" />
            @shuli-wang-uottawa
          </button>
        </a>
      </div>
    </div>
  );
}

export default MainPage;
