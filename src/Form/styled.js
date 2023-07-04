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

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  background: hsl(187, 100%, 25%);
  color: white;
  padding: 10px;
  transition: 0.5s;

  &:hover {
    background: hsl(187, 100%, 33%);
    scale: 1.1;
  }

  &:active {
    background: hsl(187, 100%, 40%);
  }

  @media (max-width: 767px) {
    flex-basis: 100%;

    &:hover {
      scale: 1.04;
    }
  }
`;
