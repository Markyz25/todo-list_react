import styled from 'styled-components';

export const FormTasks = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1em 0;

    @media screen and (max-width: 612px) {
        flex-direction: column;
        gap: 10px;
    }
`;