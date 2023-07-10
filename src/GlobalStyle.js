import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background: ${({ theme }) => theme.color.lightGrey};
  font-family: "Lato", sans-serif;
  word-break: break-word;
}

img {
  display: block;
}

button {
  cursor: pointer;
}
`;
