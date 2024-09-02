import Home from "./Home";
import Shop from "./Shop";
import ProductPage from "./ProductPage";
import Cart from "./Cart";

const Display = ({
  content,
  setContent,
  products,
  page,
  setPage,
  item,
  setItem,
  inCart,
  setInCart,
}) => {
  if (content === "Home") {
    return (
      <Home setContent={setContent} products={products} setItem={setItem} />
    );
  } else if (content === "Product") {
    return (
      <ProductPage
        item={item}
        setItem={setItem}
        setContent={setContent}
        page={page}
        setPage={setPage}
        products={products}
        inCart={inCart}
        setInCart={setInCart}
      />
    );
  } else if (content === "Cart" || content === "Pending") {
    return <Cart inCart={inCart} setInCart={setInCart} setPage={setPage} />;
  } else {
    return (
      <Shop
        content={content}
        setContent={setContent}
        products={products}
        page={page}
        setPage={setPage}
        setItem={setItem}
      />
    );
  }
};

export default Display;
