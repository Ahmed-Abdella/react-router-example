import { useLocation } from "react-router-dom";

export default function Conatact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>
        {name ? `hey ${name.toUpperCase()} ,contact us` : "contact us mate"}
      </h2>
      <p>
        A paragraph is a series of related sentences developing a central idea,
        called the topic. Try to think about paragraphs in terms of thematic
        unity: a paragraph is a sentence or a group of sentences that supports
        one central, unified idea. Paragraphs add one idea at a time to your
        broader argument.
      </p>
    </div>
  );
}
