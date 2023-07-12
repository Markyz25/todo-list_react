import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 575px;
    background-color: #c0c0c0;
    margin: 0 auto;
    border-radius: 5px;
    padding: 2rem;
    height: 90%;
    max-height: 700px;
    overflow-y: auto;

    @media screen and (max-width: 610px) {
        max-width: 90%;
        /* padding: 0 2rem; */
    }

`;