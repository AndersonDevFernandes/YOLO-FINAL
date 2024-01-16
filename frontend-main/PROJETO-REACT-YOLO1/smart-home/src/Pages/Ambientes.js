// aqui será feito layout dos IoTs disponiveis no ambiente
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Lupa from "../Imagens/lupa.svg";
import Fechadura from "../Imagens/icon-fechadura.svg";
import Lampada from "../Imagens/icon-lampada.png";
import ArCondicionado from "../Imagens/icon-ar.png";
import Add from "../Imagens/add-button.svg";
import "../Ambientes.css";

function Ambientes() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="input-div">
          <input
            placeholder="Digite o ID ou nome do dispositivo"
            className="input-button"
          />
          <div className="input-div-icon">
            <img src={Lupa} />
          </div>
        </div>
        <div className="title">
          <h6>Dispositivos cadastrados</h6>
          <p>Escolha o dispositivo que deseja adicionar em seu ambiente</p>
        </div>
        <div className="div-itens">
          <div className="div-fechadura">
            <input type="checkbox" />
            <img src={Fechadura} />
            <div className="item-description">
              <p className="description">#Fechadura Intelbras FR10</p>
              <p className="id">ID: 000-001</p>
            </div>
          </div>
          <div className="div-lampada">
            <input type="checkbox" />
            <img src={Lampada} />
            <div className="item-description">
              <p className="description">#Lâmpada Smarteck CR100</p>
              <p className="id">ID: 000-970</p>
            </div>
          </div>
          <div className="div-ar">
            <input type="checkbox" />
            <img src={ArCondicionado} />
            <div className="item-description">
              <p className="description">#Ar condicionado Split LG</p>
              <p className="id">ID: 000-183</p>
            </div>
          </div>
        </div>
        <div className="div-buttons">
          <button className="button first-button">
            Adicionar a um ambiente
          </button>
          <button className="button second-button">Remover</button>
          <div className="third-button">
            <button>
              <img src={Add} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ambientes;
