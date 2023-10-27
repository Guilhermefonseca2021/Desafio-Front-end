import styled from 'styled-components';

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
`;