import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://images-na.ssl-images-amazon.com/images/I/91qXDU9TXvL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

//refactor using map functions and key prop
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
}


const Book = (props) => {
  const { img, title, author } = props;
  
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};



//one of the preferred ways for using react props

//- destructure in function parameters (in our case props)
//- if you have console.log(props) - it won't be defined so use accordingly

// const Book = ({ img, title, author }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
