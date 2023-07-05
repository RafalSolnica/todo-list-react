import { Header, Title, Wrapper, Content } from "./styled";

const Section = ({ title, content, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>

    <Content>{content}</Content>
  </Wrapper>
);

export default Section;
