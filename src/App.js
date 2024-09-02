import "./App.css";
import { useState } from "react";
import products from "./products.json";
import Display from "./components/Display";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [inCart, setInCart] = useState([]);
  const [content, setContent] = useState("Home");
  const [page, setPage] = useState(0);
  const [item, setItem] = useState(products[0]);

  return (
    <>
      <Header setContent={setContent} setPage={setPage} />
      <Display
        inCart={inCart}
        setInCart={setInCart}
        content={content}
        setContent={setContent}
        products={products}
        page={page}
        setPage={setPage}
        item={item}
        setItem={setItem}
      />
      <Footer />
    </>
  );
}

export default App;
