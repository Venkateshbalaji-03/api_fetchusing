import { useState, useEffect } from "react";
import Header from './Components/Header';
import Products from './Components/Products';
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  // create the pagination
  const [currentPage,setCurrentPage] = useState(1);
  // set the items perpage
  const [itemsperpage,setItemsPerpage] = useState(10);


  useEffect(() => {
      fetch("https://fakestoreapi.com/products") 
      .then(res => res.json())
      .then(result => setProducts(result)); 
  }, []);

// data render 
  //start page
  const startIndex = (currentPage - 1) * itemsperpage;
  //current page
  const CurrentProducts = products.slice(startIndex,startIndex + itemsperpage);
  // total page
  const TotalPages = Math.ceil(products.length / itemsperpage)

  return (
    <>
      <Header/>

      <Products products={CurrentProducts}/>
      {/*button import*/}
      <div className="btn-container">
        <div className="btn-border">
        <button className="btn-style"onClick = {()=>setCurrentPage(prev=>prev - 1)}
        disabled={currentPage === 1}> Pervious</button>

        {Array.from({length:TotalPages},
          (_, i)=>(
            <button className="btn-style" key={i} onClick={()=>
              setCurrentPage(i+1)}>
              {i+1}</button>
          ))}
        <button className="btn-style"onClick = {()=>setCurrentPage(prev=>prev + 1)}
        disabled={currentPage === TotalPages}> Next </button>
        </div>
      </div>
    </>
  );
}

export default App;
