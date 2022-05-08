import "./App.css";
import books from "./products";

function Book(props) {
  return (
    <div>
      <img src={props.image} width="200" height="200"></img>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

function App() {
  const products = books.map((book) => (
    <Book name={book.name} img={book.image} price={book.price} />
  ));

  return (
    <div>
      <h1>Book Store</h1>
      <h2>where you can read </h2>
      <img
        src="https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg"
        alt="book store image"
        width="700"
        height="700"
      ></img>
      {products}
    </div>
  );
}

export default App;
