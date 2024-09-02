import InCart from "./InCart";

const Cart = ({ inCart, setInCart, setPage }) => {
  setPage("Pending");

  const total = () => {
    var totalPrice = 0;
    for (let i = 0; i < inCart.length; i++) {
      totalPrice += Number(inCart[i].Price.match(/\d+/g));
    }
    return totalPrice;
  };

  return (
    <div className="container">
      <div className="Break" />
      <InCart inCart={inCart} setInCart={setInCart} setPage={setPage} />
      <div className="Total">Total : {total()}</div>
    </div>
  );
};

export default Cart;
