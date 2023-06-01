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

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title}/>

      <h2>{title}</h2>

      <h4> {author} </h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
