import React from 'react';
import "./Main.css";

function MainPage() {

  return (
    <div className="Main">

      <div className="container-basic">
        <h1>Bugs are crafty, lens caps are slippery — good thing I’m a professional at both hide-and-seek and keeping track.</h1>
        <div className="container-main">
          <h1 style={{fontWeight: 'normal', marginTop: '0', background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>Quick Facts</h1>
          <p>1. I’m actively seeking a full-time Junior Software Developer role anywhere in Ontario, Canada.</p>
          <p>2. I experienced in full-stack development, database management and version control — skills I’ve applied to projects that solve real problems (and occasinally something just for fun).</p>
          <p>3. I may not tick every box for the role, but I’m a quick learner, a careful listener, detail-oriented, and focused on executing not excuses.</p>
          <p>4. I’m flexible—open to travel, on-call duties, and any extra effort needed to contribute meaningfully.</p>
          <p>5. I build websites, operate cameras, but still failed to plug the USB in on the first try.</p>


        </div>
      </div>
    </div>
  );
}

export default MainPage;