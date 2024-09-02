import Remove from "./Remove";

const InCart = ({ inCart, setInCart, setPage }) => {
  if (inCart.length > 0) {
    return inCart.map(function (each) {
      return (
        <>
          <div className="Cart-Items">
            <div className="Item">
              <div>Item : {each.Item}</div>
              <div>Quality : {each.Quality}</div>
              <div>Price : {each.Price}</div>
            </div>
            <Remove
              item={each}
              inCart={inCart}
              setInCart={setInCart}
              setPage={setPage}
            />
          </div>
          <div className="Break"></div>
        </>
      );
    });
  } else {
    return [];
  }
};

export default InCart;
