import { useState } from "react";

import './App.css';

function App(){
  // create the pagination
  const [currentPage,setCurrentPage] = useState(1);
  // set the items perpage
  const [itemsperpage,setItemsPerpage] = useState(4);

  //get items
  const data = [
    {id:1, name : "hp"},
    {id:2, name: 'dell'},
    {id:3, name:"acer"},
    {id:4, name:'lenovo'},
    {id:5, name:'apple'},
    {id:6, name:"asus"},
    {id:7, name:"tuf"},
    {id:8, name:"victus"},
  ];

// data render 
function renderData(){
  //start index
  const startIndex = (currentPage - 1) * itemsperpage;
  //end index
  const endIndex = startIndex + itemsperpage;
  // current index
  const currentIems = data.slice(startIndex, endIndex);

  return(
    <>
      <ul>
        {currentIems.map(index=>(
          <li className="list-style" key={index.id}>{index.name}</li>
        ))}
      </ul>
    </>
  );
}
//button create function
function gotonextPage(){
  setCurrentPage(prevpage=> prevpage+1);
}
function gotoperviousPage(){
  setCurrentPage(prevpage=> prevpage -1);
}
function gotoSpecificPage(pageNumber){
  setCurrentPage(pageNumber);
}
function renderPagination(){
  const Totalpage = Math.ceil(data.length / itemsperpage);

  return(
    //create show button
    <>
      <div className="btn-container">
        <button className="btn-style"onClick={gotoperviousPage}
        disabled={currentPage === 1}>pervious</button>

        {Array.from({length:Totalpage},
          (_, i)=>(
            <button className="btn-style" key={i} onClick={()=>
              gotoSpecificPage(i+1)
            }>{i+1}</button>
          )
        )}
        <button className="btn-style" onClick={gotonextPage}
        disabled={currentPage === Totalpage}>next</button>
      </div>
    </>
  );

}
return(
    <>
      <div>
        {renderData()}
        {renderPagination()}
      </div>
    </>
  );
}
export default App;

 {/* paginated products */}
      <Products products={currentProducts} />

      {/* pagination buttons */}
      <div className="btn-container">
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>