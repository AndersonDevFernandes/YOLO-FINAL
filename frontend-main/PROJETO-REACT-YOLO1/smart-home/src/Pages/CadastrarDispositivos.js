import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';
import Okbtn from '../Imagens/ok.svg'

const SeuComponente = () => {
  const [formData, setFormData] = useState({
    id: '',
    marca: '',
    ambiente: '',
    nome: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const abrirModal = () => {
    setIsOpen(true);
  };

  const fecharModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('sua-url-da-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        abrirModal(); // Abre o modal após o envio do formulário
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  Modal.setAppElement('#root');


  return (

    <div className="main">
      <div className="text">
        <p>Cadastrar Dispositivo</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="box">
            <p className="text-dispositivo">ID do dispositivo</p>
            <input
              type="number"
              placeholder="000-000"
              className="box-cad1"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="box">
            <p className="text-dispositivo">Marca do dispositivo</p>
            <input
              type="text"
              placeholder="Samsung, Iphone..."
              className="box-cad1"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
            />
          </div>
          <p className="text-dispositivo seletorBox">Ambiente de instalação</p>
          <select
            className="seletor"
            placeholder="cadastre um ambiente"
            name="ambiente"
            value={formData.ambiente}
            onChange={handleChange}
          >
            <option className="room">SALA</option>
            <option className="room">QUARTO</option>
            <option className="room">COZINHA</option>
          </select>
          <div className="box">
            <p className="text-dispositivo">Nome do dispositivo</p>
            <input
              type="text"
              placeholder="Digite o nome do dispositivo."
              className="box-cad"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="box submitBox">

            {/* <button className='submitCad' id='getInboxButton' type='submit' onClick={abrirModal}>Cadastrar Dispositivo</button> */}
            <input
              type="submit"
              value="Cadastrar dispositivo"
              className="submitCad"
              id="getInboxButton"
              onClick={abrirModal}
            />
          </div>
        </form>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={fecharModal}
          contentLabel="Modal de exemplo"
          className="Modalbord"
        >
          <div className='modalMain'>
            <div className='modalInner'>
              <img src={Okbtn} className='okbtn' alt='ok button' />
              <p className='text-modal'>Dispositivo cadastrado com sucesso</p>
              <p className='text-modal-confirmacao'>O dispositivo foi cadastrado com o nome </p>
              <button className='submitModal' onClick={fecharModal}><p className='btn-txt-modal'>OK</p></button>
            </div>
          </div>
        </Modal>
      </div>

    </div>

  )
}


export default SeuComponente
