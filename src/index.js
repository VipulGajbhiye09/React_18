import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {books} from './books'

import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book,index) => {
          return <Book {...book} key={book.id} number={index}/>;
        })}
      </section>
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/91qXDU9TXvL._AC_UL600_SR600,400_.jpg"
//     alt="The Wager: A Tale of Shipwreck, Mutiny and Murder"
//   />
// );
// const Title = () => {
//   return <h2>The Wager: A Tale of Shipwreck, Mutiny and Murder</h2>;
// };
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4 style={inlineHeadingStyles}>David Grann </h4>;
// };
