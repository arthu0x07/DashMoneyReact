import React, { useState, FormEvent } from "react";
import { api } from "../../services/api";
import Modal from "react-modal";
import LogoIconeVerdin from "../../assets/income.svg";
import LogoIconeVermelho from "../../assets/outcome.svg";
import { Forms, Titulo, ConteinerBotoes, RadioButtons } from "./style";

interface ModalTransactionProps {
  isOpen: boolean;
  CloseModal: () => void;
}

Modal.setAppElement("#root");

export function ModalTransaction({
  isOpen,
  CloseModal,
}: ModalTransactionProps) {
  const [type, setType] = useState<string>("deposit");
  const [title, setTitle] = useState<string>();
  const [value, setValue] = useState<number>();
  const [category, setCategory] = useState<string>();

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      type,
      title,
      value,
      category,
    };

    api.post("/transactions", data);
  }

  return (
    <Modal
      onRequestClose={CloseModal}
      isOpen={isOpen}
      className="content-modal"
      overlayClassName="overlay-modal"
    >
      <Titulo>Cadastrar tarefas</Titulo>

      <Forms onSubmit={handleCreateNewTransaction}>
        <input
          type="text"
          placeholder="Titulo"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
        />

        <ConteinerBotoes>
          <RadioButtons
            onClick={(event) => {
              event.preventDefault();
              setType("deposit");
            }}
            Status={type == "deposit"}
            ActiveColor="rgb(18, 164, 84, 0.15)"
          >
            <img src={LogoIconeVerdin} alt="Seta para cima verde" />
            <h3>Entrada</h3>
          </RadioButtons>
          <RadioButtons
            onClick={(event) => {
              event.preventDefault();
              setType("withdraw");
            }}
            Status={type == "withdraw"}
            ActiveColor="rgb(229, 46, 77, 0.15)"
          >
            <img src={LogoIconeVermelho} alt="Seta para baixo vermelha" />
            <h3>Saida</h3>
          </RadioButtons>
        </ConteinerBotoes>

        <input
          type="text"
          placeholder="Categoria"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button>Cadastrar</button>
      </Forms>
    </Modal>
  );
}
