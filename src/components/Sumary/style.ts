import styled from "styled-components";

export const Container = styled.main`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Setaremos o display flex aqui para aplicar nas section */

  section {
    width: 32%;
    background-color: #f2f2f2;
    padding: 2rem 3rem;
    margin-top: -5rem;
    border-radius: 0.5rem;
    color: var(--titulos);

    :last-child {
      background-color: var(--green);
      color: #f2f2f2;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
      margin: 1.2rem 0;
      font-weight: 400;
    }

    strong {
      font-weight: 500;
      font-size: 3rem;
    }
  }
`;
