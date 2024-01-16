import React from "react"

import ImgLogin from "../Imagens/loguinPhoto.png"
import ImgNavbar from "../Imagens/navbarYolo.png"
import Logo from "../Imagens/yoloLogo.png"

import '../App.css';

function Topo() {
  return (
    <div className="header">
      <div className="btnHeader">
        <img src={ImgNavbar} className="navBar btn" alt="Navbar" onClick={ImgNavbar} />
        <img src={Logo} className="logo btn" alt="Logo" onClick={Logo} />
        <img src={ImgLogin} className="Loguin btn" alt="Loguin" onClick={ImgNavbar} />
      </div>
      <div className="txt-box-Header">
        <p className="texttop">YOLO SMART HOME</p>
      </div>
    </div>
  )
}

export default Topo