import { styled } from "styled-components";

export const StyledSection = styled.section`
  background: #fff;
  box-shadow: 1px 1px 5px #ccc;
  margin: 10px 0;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ccc;
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Title = styled.h2`
  margin-block-end: 0;
  margin-block-start: 0;
  padding: 5px;
`;

export const Content = styled.div`
  padding: 20px;
`;
