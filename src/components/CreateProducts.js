import ProductBox from "./ProductBox";

const CreateProducts = ({ products, setContent, setItem }) => {
  if (products.length > 0) {
    return products.map(function (each) {
      return (
        <>
          <ProductBox
            img={each.Picture}
            price={each.Price}
            product={each.Item}
            setContent={setContent}
            info={each}
            setItem={setItem}
          />
        </>
      );
    });
  } else {
    return [];
  }
};

export default CreateProducts;
