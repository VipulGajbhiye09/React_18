import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const author = "David Grann";
const title = "The Wager: A Tale of Shipwreck, Mutiny and Murder";
const img ="https://images-na.ssl-images-amazon.com/images/I/91qXDU9TXvL._AC_UL600_SR600,400_.jpg";

function BookList() {
  return (
    <section className="booklist">
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


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
