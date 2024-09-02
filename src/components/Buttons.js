const Buttons = ({ id, setContent, setPage }) => {
  const whatPage = (button) => {
    setContent(button);
    setPage(0);
  };

  return (
    <div onClick={() => whatPage(id)} className="button">
      {id}
    </div>
  );
};

export default Buttons;
