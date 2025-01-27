import React from 'react';
import "./Main.css";

function MainPage() {

  return (
    <div className="Main">

      <div className="container-basic">
        <h1>Bugs are crafty, lens caps are slippery — good thing I’m a professional at both hide-and-seek and keeping track.</h1>
        <div className="container-main">
          <h1 style={{fontWeight:'bold', marginTop: '0', background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>Quick Facts</h1>
          <p>• My name is Shuli, a software developer with a passion for both coding and photography. You can find more about me in the <a href="/About">About</a> section.</p>
          <p>• I’m actively seeking a full-time Junior Software Developer role anywhere in Ontario, Canada, including remote opportunities.</p>
          <p>• I have hands-on experience in full-stack development, database management, and version control  — skills I’ve applied to projects that solve real problems (and occasionally something just for fun).</p>
          <p>• While I may not tick every box for a role, I’m a quick learner, a careful listener, detail-oriented, and focused on execution, not excuses.</p>
          <p>• I’m flexible — open to travel, on-call duties, and any extra effort needed to contribute meaningfully.</p>
          <p>• I build websites, operate cameras, but still failed to plug the USB in on the first try.</p>
          <h1 style={{marginLeft:'0',marginRight:'0'}}>Feel free to explore my projects, check out my photography, or reach out — I’d love to connect!</h1>

        </div>
      </div>
    </div>
  );
}

export default MainPage;