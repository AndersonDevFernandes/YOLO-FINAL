import React from "react"

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Dispositivo from '../Pages/CadastrarDispositivos'

import '../App.css';

function CadUser() {
  return (
    <div className="mainContainer">
      <Header />
      <Dispositivo />
      <Footer />
    </div>
  )
}

export default CadUser
