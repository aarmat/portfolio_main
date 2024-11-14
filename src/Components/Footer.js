import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Aarav Mathur</h4>
      <h4>Copyright &copy; 2023 AM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/aarmat" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aaravmathur/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:aarav.mathur0104@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/aarmat/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer