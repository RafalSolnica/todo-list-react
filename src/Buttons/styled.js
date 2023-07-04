import { styled } from "styled-components";

export const ButtonContainer = styled.div`
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  border: none;
  background: #fff;
  color: hsl(187, 100%, 25%);
  transition: 0.5s;
  padding: 10px;

  &:hover {
    color: hsl(187, 100%, 40%);
  }

  &:disabled {
    color: hsl(0, 0%, 75%);
    cursor: default;
  }
`;
