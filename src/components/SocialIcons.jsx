import React from "react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./SocialIcons.css";
import fauget from '../assets/Fauget.png';

const SocialIcons = () => {
  return (
    <div className="icons-container">
      <img src={fauget} alt="logo" className="fauget" />
      <FaWhatsapp 
       style={{ 
        color: "#25D366", 
        fontSize: "50px", 
        margin: "5px",   
        cursor: "pointer"
      }} 
      className="icon" />
      <FaFacebook 
      style={{ 
        color: "#1877F2",  
        fontSize: "50px", 
        margin: "5px",     
        cursor: "pointer", 
      }} 
      className="icon" />
      <FaTwitter 
      style={{ 
        color: "#1DA1F2",  // Twitter's brand blue
        fontSize: "50px",   // Adjust size
        margin: "5px",      // Spacing
        cursor: "pointer",  // Pointer cursor on hover
      }} 
      className="icon" />
      <FaInstagram 
      style={{ 
        color: "#E1306C",  // Instagram pink
        fontSize: "50px",  // Adjust size
        margin: "5px",     // Spacing
        cursor: "pointer", // Pointer cursor on hover
      }}
      className="icon" />
    </div>
  );
};

export default SocialIcons;