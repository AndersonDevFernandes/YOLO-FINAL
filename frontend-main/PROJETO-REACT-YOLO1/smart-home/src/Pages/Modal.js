import Modal from '../Components/ModalComp'

import Okbtn from '../Imagens/SVG/ok.svg'
import { useState } from 'react'


import './App.css'


function Modall() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='modalMain'>
      <div className='modalInner'>
        <img src={Okbtn} className='okbtn' alt='ok button' />
        <p>Dispositivo cadastrado com sucesso</p>
        <p>O dispositivo foi cadastrado com o nome </p>
        {/* atribuir nome do dispositivo para que o mesmo apareça na confirmação */}
        <button className='submitModal' onClick={() => setOpenModal(true)}>OK</button>
      </div>
      <Modal isOpen={openModal} />
    </div>
  )
}

export default Modall


