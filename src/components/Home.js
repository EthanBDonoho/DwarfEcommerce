import About from "./About";
import Featured from "./Featured";

const Home = ({ setContent, products, setItem }) => {
  return (
    <div>
      <About />
      <Featured setContent={setContent} products={products} setItem={setItem} />
    </div>
  );
};

export default Home;
