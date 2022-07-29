import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Derek Manning</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon onClick={event => window.location.href='https://www.linkedin.com/in/derek-manning/'} />
          <EmailIcon onClick={event => window.location.href='mailto:derekmanning25@yahoo.com'} />
          <GithubIcon onClick={event => window.location.href='https://github.com/ManningD24'} />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C#, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;