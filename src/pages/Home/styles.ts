import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    max-width: 840px;

    gap: 1rem;
`;

export const HeaderBox = styled.div`
    margin-top: 4rem;
    padding: 1.2rem;
    display: flex;

    justify-content: space-between;
    align-items: end;
    margin-bottom: 1.5rem;

    div b {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 5rem;
    }

    input {
        width: 12rem;
        height: 1.5rem;
        border: none;

        padding: .2rem;
        border-radius: 8px;
        outline: none;
    }
`;

export const CardBox = styled.div`
    margin-top: 1rem;
    padding: 1.2rem;
    display: flex;
    flex-wrap: wrap;

    gap: 1rem;
`;