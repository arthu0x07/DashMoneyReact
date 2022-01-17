import { Header } from "./components/Header";
import { Sumary } from "./components/Sumary";
import { TransactionTable } from "./components/TransactionsTable";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <>
      <Header />
      <Sumary />
      <TransactionTable />
      <GlobalStyle />
    </>
  );
}
