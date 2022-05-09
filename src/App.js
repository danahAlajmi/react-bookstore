import "./App.css";
import books from "./products";
import Home from "./components/Home";
import Productslist from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Home />
      <Productslist />
    </div>
  );
}

export default App;
