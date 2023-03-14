import React from 'react';

import { BackTop } from 'antd';
import '../../App.css';
import logo from '../../assets/srdi_logo_white.png'
function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo flex">
          <a href="/" className="ml-auto mr-auto">
            <img width={75} height={75} src={logo}></img>
          </a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Şcoala Română de înot | Copyright &copy; 2023 | All Rights Reserved</div>
      </div>
    </div>
  );
}

export default AppFooter;