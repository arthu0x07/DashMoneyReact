import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: 2.4rem;
  color: var(--titulos);
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  color: red;

  input {
    padding: 2rem 2rem;
    border-radius: 0.25rem;
    border: 0;
    background-color: var(--background);
    font-size: 1.6rem;
    font-weight: 400;

    &::placeholder {
      color: var(--textos);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus-visible {
      outline: 0;
    }
  }

  button {
    padding: 2rem 1rem;
    border-radius: 0.25rem;
    border: 0;
    background-color: var(--green);
    margin-top: 1rem;
    color: #f2f2f2;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const ConteinerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: transparent;

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--titulos);
  }
`;

interface RadioButtonsProps{
    Status: boolean;
    ActiveColor: string;
}

export const RadioButtons = styled.button<RadioButtonsProps>`
  background-color: ${(props) => {if(props.Status == true) {return props.ActiveColor} else return 'transparent'}} !important;
  border-radius: 0.75rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.05) !important;
  width: 49%;
  color: var(--titulos);

  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: 0.2s border;

  &:hover{
    border: 0.2rem solid rgba(0, 0, 0, 0.15) !important;
  }
`;
