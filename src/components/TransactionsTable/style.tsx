import styled from "styled-components";

export const Conteiner = styled.section`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 4rem 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-size: 1.6rem;
      font-weight: 300;
      text-align: left;
      color: var(--textos);
      padding: 1.5rem 2rem;
    }

    td {
      font-size: 1.6rem;
      font-weight: 300;
      color: var(--textos);
      background-color: var(--background-desfalq);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
    }

    .deposit {
      color: #33cc95;
    }

    .withdraw {
      color: #e52e4d;
    }
  }
`;
