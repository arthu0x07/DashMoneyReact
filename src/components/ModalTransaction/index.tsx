import { useState } from "react";
import Modal from "react-modal";
import LogoIconeVerdin from "../../assets/income.svg";
import LogoIconeVermelho from "../../assets/outcome.svg";
import { Forms, Titulo, ConteinerBotoes, RadioButtons } from "./style";

interface ModalTransactionProps {
  isOpen: boolean;
  CloseModal: () => void;
}

export function ModalTransaction({
  isOpen,
  CloseModal,
}: ModalTransactionProps) {
  const [type, setType] =
    useState(
      "deposit"
    ); /* Será utilizado para definir o tipo, vou usar isto para diferenciar o botão que está ativo. */

  return (
    <Modal
      onRequestClose={CloseModal}
      isOpen={isOpen}
      className="content-modal"
      overlayClassName="overlay-modal"
    >
      <Titulo>Cadastrar tarefas</Titulo>

      <Forms>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <ConteinerBotoes>
          <RadioButtons
            onClick={() => {
              setType("deposit");
            }}
            Status={type == "deposit"}
            ActiveColor="rgb(18, 164, 84, 0.15)"
          >
            <img src={LogoIconeVerdin} alt="Seta para cima verde" />
            <h3>Entrada</h3>
          </RadioButtons>
          <RadioButtons
            onClick={() => {
              setType("withdraw");
            }}
            Status={type == "withdraw"}
            ActiveColor="rgb(229, 46, 77, 0.15)"
          >
            <img src={LogoIconeVermelho} alt="Seta para baixo vermelha" />
            <h3>Saida</h3>
          </RadioButtons>
        </ConteinerBotoes>

        <input type="text" placeholder="Categoria" />
        <button>Cadastrar</button>
      </Forms>
    </Modal>
  );
}
