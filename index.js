import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
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

root.render(<BookList />);
