import books from "../products";
import ProducIitem from "./ProductItem";

function Productslist() {
  const products = books.map((book) => (
    <ProducIitem name={book.name} img={book.image} price={book.price} />
  ));
  return <div>{products}</div>;
}

export default Productslist;
