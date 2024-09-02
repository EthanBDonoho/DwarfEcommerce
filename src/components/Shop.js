import React from "react";
import { useState } from "react";
import CreateProducts from "./CreateProducts";
import PageNumbers from "./PageNumbers";

const Shop = ({ content, setContent, products, page, setPage, setItem }) => {
  const [sort, setSort] = useState("Select One");
  var sortCheck = "Select One";

  const sortStyle = () => {
    var optionCheck = document.getElementById("Sort");
    var optionText = optionCheck.options[optionCheck.selectedIndex].text;
    sortCheck = optionText;
    setSort(sortCheck);
  };

  var validProducts = [];
  var sortedProducts = [];

  const itemSort = () => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].Type.includes(String(content))) {
        validProducts.push(products[i]);
      }
    }
  };

  const priceAsc = () => {
    itemSort();

    let newProducts = Object.keys(validProducts).sort(
      (a, b) =>
        validProducts[a].Price.match(/\d+/g) -
        validProducts[b].Price.match(/\d+/g)
    );

    sortedProducts = [];

    for (let i = 0; i < newProducts.length; i++) {
      sortedProducts.push(validProducts[newProducts[i]]);
    }
    validProducts = sortedProducts;
  };

  if (sort === "Select One") {
    itemSort();
  } else if (sort === "Price Asc") {
    priceAsc();
  } else if (sort === "Price Desc") {
    priceAsc();
    validProducts = sortedProducts.reverse();
  }

  var Pages = 0;

  if (validProducts.length % 9 === 0) {
    Pages = validProducts.length / 9;
  } else if (validProducts.length % 9 !== 0) {
    Pages = Number(Math.trunc(validProducts.length / 9) + 1);
  } else {
    console.log("Error");
  }

  var productsInPage = [];

  for (let i = 0; i < Pages; i++) {
    var tempProducts = [];
    if (validProducts.length > 9) {
      for (let i = 0; i < 9; i++) {
        tempProducts.push(validProducts[0]);
        validProducts.shift();
      }
      productsInPage.push(tempProducts);
    } else if (validProducts.length < 9) {
      for (let i = 0; i < validProducts.length; i++) {
        tempProducts.push(validProducts[0]);
        validProducts.shift();
      }
      productsInPage.push(tempProducts);
    }
  }

  return (
    <div>
      <div className="Shop-Header">
        <div>Sort:</div>
        <select name="Sort" id="Sort" onChange={() => sortStyle()}>
          <option>Select One</option>
          <option>Price Asc</option>
          <option>Price Desc</option>
        </select>
      </div>
      <br />
      <div className="Shop-Body">
        <CreateProducts
          products={productsInPage[page]}
          setContent={setContent}
          setItem={setItem}
        />
        ;
      </div>
      <br />
      <div className="Page-Numbers">
        <PageNumbers pages={Pages} setPage={setPage} />
      </div>
    </div>
  );
};

export default Shop;
