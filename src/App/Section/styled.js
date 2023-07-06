import { styled } from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 1px 1px 5px ${({ theme }) => theme.color.grey};
  margin: 10px 0;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    & {
      grid-template-columns: auto;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 5px;
`;

export const Content = styled.div`
  padding: 20px;
`;
