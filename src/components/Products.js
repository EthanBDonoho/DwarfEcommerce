const Products = ({ img, price, product }) => {
  return (
    <div>
      <div className="Product-Display">
        <img className="Product-Pic" src={img} alt="Dwarven Tools"></img>
        <div className="Middle">
          <div className="Price">{price}</div>
        </div>
      </div>
      <div className="Product-Name">{product}</div>
    </div>
  );
};

export default Products;
