import SetaParaCima from "../../assets/income.svg";
import SetaParaBaixo from "../../assets/outcome.svg";
import SimboloCifrao from "../../assets/total.svg";
import { Container } from "./style";

export function Sumary() {
  return (
    <>
      <Container>
        <section>
          <div>
            <h2>Entradas</h2>
            <img src={SetaParaCima} alt="Seta para cima" />
          </div>
          <strong>R$ 12.300,00</strong>
        </section>

        <section>
          <div>
            <h2>Saidas</h2>
            <img src={SetaParaBaixo} alt="Seta para baixo" />
          </div>
          <strong>R$ 1300,00</strong>
        </section>

        <section>
          <div>
            <h2>Entradas</h2>
            <img src={SimboloCifrao} alt="Simbolo do Cifrão" />
          </div>
          <strong>R$ 12.300,00</strong>
        </section>
      </Container>
    </>
  );
}
