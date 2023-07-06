import { Wrapper, Header, Content } from "./styled";

const Section = ({ title, extraHeaderContent, content }) => (
  <Wrapper>
    <Header>
      <h2>{title}</h2>
      {extraHeaderContent}
    </Header>

    <Content>{content}</Content>
  </Wrapper>
);

export default Section;
