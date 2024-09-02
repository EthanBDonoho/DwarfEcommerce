import Buttons from "./Buttons";
const Header = ({ setContent, setPage }) => {
  return (
    <div className="Header">
      <Buttons setContent={setContent} id={"Home"} setPage={setPage} />
      <div>
        <Buttons setContent={setContent} id={"Tools"} setPage={setPage} />
        <Buttons setContent={setContent} id={"Clothes"} setPage={setPage} />
        <Buttons setContent={setContent} id={"Food"} setPage={setPage} />
        <Buttons setContent={setContent} id={"Ore"} setPage={setPage} />
      </div>
      <Buttons setContent={setContent} id={"Cart"} setPage={setPage} />
    </div>
  );
};

export default Header;
