import styled from 'styled-components';

export const Input = styled.input`
    background-color: #a4a4a4;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: .6em 1em;
    width: 100%;
    margin: 1em 0;
    font-size: 1.2em;

    &::placeholder {
        color: #1e1e1e;
    }
`;