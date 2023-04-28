import React from "react";
import ReactDOM from "react-dom/client";

function Message() {
  return <h1>My First Component</h1>;
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91qXDU9TXvL._AC_UL600_SR600,400_.jpg"
    alt="The Wager: A Tale of Shipwreck, Mutiny and Murder"
  />
);
const Title = () => {
  return <h2>The Wager: A Tale of Shipwreck, Mutiny and Murder</h2>;
};
const Author = () => <h4>David Grann</h4>;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Message />);
