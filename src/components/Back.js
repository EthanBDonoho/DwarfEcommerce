const Back = ({ item, setContent, page, setPage }) => {
  const goBack = (page, previousItem) => {
    setPage(page);
    setContent(previousItem);
  };

  const previousItem = item.Type;

  return (
    <div className="Back" onClick={() => goBack(page, previousItem)}>
      Back
    </div>
  );
};

export default Back;
