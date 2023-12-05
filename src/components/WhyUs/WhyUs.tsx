// style
import "./whyUs.css";

export default function WhyUs() {
  let arrOfSugestions: string[] = [
    "Tutorials by industry experts",
    "Peer & expert code review",
    "Coding exercises",
    "Access to our GitHub repos",
    "Community forum",
    "Flashcard decks",
    "New videos every week",
  ];
  return (
    <>
      <div id="WhyUs">
        <div id="WhyUs-box">
          <h2>Why Us</h2>
          <ul>
            {arrOfSugestions.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
