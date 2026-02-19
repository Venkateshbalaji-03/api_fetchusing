import { useState, useEffect } from "react";
import Header from './Components/Header';
import Products from './Components/Products';
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") 
      .then(res => res.json())
      .then(result => setProducts(result));     
  }, []);

  return (
    <>
      <Header/>
      <Products products={products}/>
    </>
  );
}

export default App;
