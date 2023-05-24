import "./style.css";

const Section = ({ title, content, extraHeaderContent }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      {extraHeaderContent}
    </header>

    <div className="section__content">{content}</div>
  </section>
);

export default Section;
