import styled from 'styled-components';

export const TodoStyle = styled.div`
    .todo-style {
        border-bottom: 1px solid #000;
        display: flex;
        justify-content: space-between;

    }
    @media screen and (max-width: 550px) {
        .todo-style {
            display: flex;
            flex-direction: column;
            align-items: center;
        }        
    }
`;

export const Title = styled.h1`
    padding-bottom: 1em;
    width: 100%;
`;