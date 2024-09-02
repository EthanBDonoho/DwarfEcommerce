import ProductBox from "./ProductBox";

const Featured = ({ setContent, products, setItem }) => {
  return (
    <div className="Featured-Box">
      <br />
      <div className="Featured-Title">Featured</div>
      <br />
      <div className="Featured">
        <ProductBox
          img={products[0].Picture}
          price={products[0].Price}
          product={products[0].Item}
          setContent={setContent}
          info={products[0]}
          setItem={setItem}
        />
        <ProductBox
          img={products[1].Picture}
          price={products[1].Price}
          product={products[1].Item}
          setContent={setContent}
          info={products[1]}
          setItem={setItem}
        />
        <ProductBox
          img={products[2].Picture}
          price={products[2].Price}
          product={products[2].Item}
          setContent={setContent}
          info={products[2]}
          setItem={setItem}
        />
      </div>
      <br />
    </div>
  );
};

export default Featured;
