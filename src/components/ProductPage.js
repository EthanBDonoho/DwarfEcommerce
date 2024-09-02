import Back from "./Back";
import Featured from "./Featured";

const ProductPage = ({
  item,
  setItem,
  setContent,
  page,
  setPage,
  products,
  inCart,
  setInCart,
}) => {
  const currentlyInCart = inCart;
  const addToCart = (item) => {
    currentlyInCart.push(item);
    setInCart(currentlyInCart);
  };
  return (
    <div className="container">
      <Back item={item} setContent={setContent} page={page} setPage={setPage} />
      <div className="Product-Info">
        <img
          className="Product-Page-Pic"
          src={item.Picture}
          alt="Product Information"
        ></img>
        <div className="Product-Text">
          <h1>{item.Item}</h1>
          <div className="Details">
            <div>
              Type:
              {item.Type}
            </div>
            <div>
              Quality:
              {item.Quality}
            </div>
          </div>
          <br />
          <div>{item.Description}</div>
          <br />
          <div>{item.Price}</div>
          <div className="Back" onClick={() => addToCart(item)}>
            Add
          </div>
        </div>
      </div>
      <div className="Divider"></div>
      <Featured setContent={setContent} products={products} setItem={setItem} />
    </div>
  );
};

export default ProductPage;
