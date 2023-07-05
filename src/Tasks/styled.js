import { styled, css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex: 1 1 auto;

  ${({ $completed }) =>
    $completed &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  padding: 0;
  width: 30px;
  height: 30px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;

  ${({ $toggleCompleted }) =>
    $toggleCompleted &&
    css`
      font-size: 21px;
      background: ${({ theme }) => theme.color.green};
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      font-size: 28px;
      background: ${({ theme }) => theme.color.red};
    `}

    &:hover {
    filter: brightness(1.25);
  }

  &:active {
    filter: brightness(1.5);
  }
`;
