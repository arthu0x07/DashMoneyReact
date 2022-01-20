import { useState } from "react";
import { Header } from "../../components/Header";
import { ModalTransaction } from "../../components/ModalTransaction";
import { Sumary } from "../../components/Sumary";
import { TransactionTable } from "../../components/TransactionsTable";
import GlobalStyle from "../../styles/global";

export function Home() {
  const [isTransactionModalOpen, SetStateModal] = useState(false);
  
  function CloseModal() {
    SetStateModal(false);
  }

  function OpenModal() {
    SetStateModal(true);
  }

  return (
    <>
      <Header OpenModal={OpenModal}/>
      <Sumary />
      <TransactionTable />
      <ModalTransaction isOpen={isTransactionModalOpen} CloseModal={CloseModal} />
      <GlobalStyle />
    </>
  );
}
