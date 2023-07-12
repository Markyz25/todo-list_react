import styled from 'styled-components';

export const ContainerTodo = styled.div`
    background-color: #d6d6d6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: .5em .7em;
    border-radius: 25px;

    @media screen and (max-width: 612px) {
        padding: .2em;
    }
`;