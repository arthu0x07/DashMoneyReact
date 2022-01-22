import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Conteiner } from "./style";

interface Transaction {
  category: string;
  createdAt: string;
  id: number;
  value: string;
  title: string;
  type: string;
}

export function TransactionTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => {
      setTransactions(response.data.transactions)
    });
  }, []);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <Conteiner>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        {/* Lembrando, esta funcionalidade ainda vai ser componentizada... */}
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(Number(transaction.value))}</td>
                <td>{transaction.category}</td>
                <td>{Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Conteiner>
  );
}
