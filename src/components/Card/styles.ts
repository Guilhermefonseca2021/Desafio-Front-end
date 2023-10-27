import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 400px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 8px;

    div {
        display: flex;
        align-items: center;
    }
    
    div b {
        text-transform: capitalize;
    }
`;

export const UserBoxImg = styled(FiUser)`
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.DESCRIPTION_COLOR};
    padding: .5rem;
`;