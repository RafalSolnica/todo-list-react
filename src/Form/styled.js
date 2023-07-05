import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  transition: 0.5s;

  &:hover {
    filter: brightness(125%);
    scale: 1.05;
  }

  &:active {
    filter: brightness(150%);
  }

  @media (max-width: 767px) {
    flex-basis: 100%;

    &:hover {
      scale: 1.04;
    }
  }
`;
