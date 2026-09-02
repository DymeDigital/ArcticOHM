/* Catalogue-style section header: a reference code and a rule
   line, then the title and an optional short intro. One device,
   used for every section, so the page reads as one document. */
export default function SectionHead({ code, title, intro, id }) {
  return (
    <header className="section-head" id={id}>
      <div className="section-head-index">
        <span className="section-head-code">{code}</span>
        <span className="section-head-rule" aria-hidden="true" />
      </div>
      <h2 className="section-head-title">{title}</h2>
      {intro && <p className="section-head-intro">{intro}</p>}
    </header>
  );
}
