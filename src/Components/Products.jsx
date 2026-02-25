function Products({products = [],view}){
    return(
        <div className={`products ${view}`}>
            {products.map(item => (
              <div key={item.id} className="product-card">
                <img src={item.image} className="img" alt={item.title}></img>
                <div className="product-info">
                  <h4 className="name">{item.title}</h4>
                  <p>$ {item.price}</p>
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
    )
}
export default Products;
