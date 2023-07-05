import { styled } from "styled-components";

export const ButtonsContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.teal};
  transition: 0.5s;
  padding: 10px;

  &:hover:enabled {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.grey};
    cursor: default;
  }
`;
