import { Wrapper, Header, Title, Content } from "./styled";

const Section = ({ title, extraHeaderContent, content }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>

    <Content>{content}</Content>
  </Wrapper>
);

export default Section;
