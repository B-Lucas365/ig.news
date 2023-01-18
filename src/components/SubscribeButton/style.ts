import styled from 'styled-components'

export const Subscribe = styled.button`
    width: 260px;
    height: 4rem;
    border: 0;
    border-radius: 2rem;
    background-color: var(--yellow-500);
    color: var(--grey-900);
    font-size: 1.25rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter .2s;

    &:hover {
        filter: brightness(.8);
    }
`