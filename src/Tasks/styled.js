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
  border-bottom: 2px solid #ededed;

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
  color: white;
  transition: 0.5s;

  ${({ $toggleCompleted }) =>
    $toggleCompleted &&
    css`
      font-size: 21px;
      background: hsl(120, 100%, 25%);

      &:hover {
        background: hsl(120, 100%, 35%);
      }

      &:active {
        background: hsl(120, 100%, 45%);
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background: hsl(0, 100%, 50%);
      font-size: 28px;

      &:hover {
        background: hsl(0, 100%, 62%);
      }

      &:active {
        background: hsl(0, 100%, 75%);
      }
    `}
`;
