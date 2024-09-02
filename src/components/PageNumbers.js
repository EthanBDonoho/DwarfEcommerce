const PageNumbers = ({ pages, setPage }) => {
  const whatNumber = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  var numbers = [];

  for (let i = 0; i < pages; i++) {
    numbers.push(i + 1);
  }
  return numbers.map((each) => {
    return (
      <>
        <div className="Page-Number">
          <div className="text" onClick={() => whatNumber(each - 1)}>
            {each}
          </div>
        </div>
      </>
    );
  });
};

export default PageNumbers;

// return <div className="Page-Number">{numbers}</div>;
