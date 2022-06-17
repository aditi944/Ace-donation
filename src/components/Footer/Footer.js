import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'
import RoomIcon from "@material-ui/icons/Room";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <div className="Footer">

      <div className="FooterElementLeft">
        <div className="upper clubInfo">
          <h1 className="name">ACE DONATION</h1>
          <p className="address">
            <RoomIcon style={{ color: "red" }} />
            &nbsp;&nbsp; Hyderabad , Telangana
          </p>
        </div>
      </div>

      
      <div className="FooterElementRight">
      <h2 className="contact">Contacts</h2>
        <div className="connectAt">
          <Link
            href=""
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon className="icons" style={{ color: "#646FD4" }} />
          </Link>
          <Link
            href=""
            rel="noreferrer"
            target="_blank"
          >
            <FacebookIcon className="icons" style={{ color: " #646FD4" }} />
          </Link>
          <Link
            href=""
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="icons" style={{ color: " #646FD4" }} />
          </Link>
          <Link
            href=""
            rel="noreferrer"
            target="_blank"
          >
            <EmailIcon className="icons" style={{ color: "#646FD4" }} />
          </Link>
        </div>
      </div>

      <div className="Copyright">
      <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
      </div>
    </div>
  );
};

export default Footer;