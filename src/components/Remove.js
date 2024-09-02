const Remove = ({ item, inCart, setInCart, setPage }) => {
  const currentCart = inCart;
  const removeItem = (item) => {
    const index = currentCart.indexOf(item);
    currentCart.splice(index, 1);
    return setPage("Cart");
  };
  return (
    <div className="Back" onClick={() => removeItem(item)}>
      Remove
    </div>
  );
};

export default Remove;
