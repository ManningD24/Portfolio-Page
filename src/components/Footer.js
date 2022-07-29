import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon onClick={event => window.location.href='https://github.com/ManningD24'} />
        <FacebookIcon onClick={event => window.location.href='https://www.facebook.com/derek.manning.184/'} />
        <LinkedInIcon onClick={event => window.location.href='https://www.linkedin.com/in/derek-manning/'} />
      </div>
      <p> &copy; 2022 Derek Manning</p>
    </div>
  );
}

export default Footer;