import { Conteiner } from "./style";

export function TransactionTable() {
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

        {/* Os valores receberam sua cor com uma condicional, alterando se for de ganho ou de gasto, no style usaremos uma expressão ternária para atribuir sua cor*/}

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td>R$ 5.000,00</td>
            <td>Freelancer</td>
            <td>26/01/2022</td>
          </tr>

          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td>R$ 5.000,00</td>
            <td>Freelancer</td>
            <td>26/01/2022</td>
          </tr>

          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td>R$ 5.000,00</td>
            <td>Freelancer</td>
            <td>26/01/2022</td>
          </tr>

          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td>R$ 5.000,00</td>
            <td>Freelancer</td>
            <td>26/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Conteiner>
  );
}
