import React from "react"

import { Link } from 'react-router-dom'
import btnHome from '../Imagens/home.png'
import btnAmbiente from '../Imagens/ambientes.png'
import btnDispositivo from '../Imagens/dispositivo.png'
import notificacoes from '../Imagens/notificações.png'

import '../App.css';

function Footer() {
  return (
    <div className="footer">
      <div className="btn-footer">
        <Link to="/"><button><img className="img-footer" src={btnHome} alt="home" onClick={btnHome} /></button></Link>
      </div>
      <div className="btn-footer">
        <Link to="/pages/CadastrarDispositivos"><button><img className="img-footer" src={btnAmbiente} alt="Dispositivo" onClick={btnAmbiente} /></button></Link>
      </div>
      <div className="btn-footer">
        <Link to="/pages/Ambientes"><button><img className="img-footer" src={btnDispositivo} alt="Ambiente" onClick={btnDispositivo} /></button></Link>
      </div>
      <div className="btn-footer">
        <Link to="/pages/Notificacoes"><button><img className="img-footer" src={notificacoes} alt="notificações" onClick={notificacoes} /></button></Link>
      </div>
    </div>
  )
}

export default Footer


