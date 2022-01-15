import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: auto;
    background-color: var(--blue);
    padding: 2rem 4rem;
`

export const Content = styled.section`
    max-width: var(--maxwidth);
    width: 100%;
    margin: 0 auto;

    padding: 1rem 3rem 8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1.6rem;
        cursor: pointer;
        padding: 1.5rem 3rem;
        border-radius: 0.2rem;
        border: 0;
        background-color: var(--lightblue);
        color: #ffffff;
        font-weight: 400;
    }
`;