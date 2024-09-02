import Products from "./Products";

const ProductBox = ({ img, price, product, setContent, info, setItem }) => {
  const whatPage = (button) => {
    setContent(button);
    setItem(info);
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={() => whatPage("Product")} className="Product-Box">
      <Products img={img} price={price} product={product} />
    </div>
  );
};

export default ProductBox;
