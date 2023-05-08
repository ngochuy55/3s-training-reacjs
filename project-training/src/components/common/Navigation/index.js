import React, { useEffect, useState } from "react";
// import { Outlet } from 'react-router-dom';
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/css/Navigation.css";
import "../../../assets/css/Responsive.css";
import Navigation from "../../../template/Navigation";
import axios from "axios";
import { productActions, useProducts } from "../../../Store";
import Home from "../../../template/Home";

export function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [products, setproducts] = useState([]);
  const [productState, dispatch] = useProducts();
  const logo = require("../../../assets/images/logo-fix.png");
  let item = localStorage.getItem("user");

  const [search, setSearchValue] = useState("");

  const fetchData = async () => {
    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        setproducts(res.data);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {});
  };
  useEffect(() => {
    fetchData();
  }, []);

  function handleSearchClick() {
    dispatch(productActions.setSearchName(search));
    if (search === "") {
      dispatch(productActions.setSearchResult(products));

      return;
    }
    console.log(search);
    const filterBySearch = products.filter((item) => {
      console.log(item);

      if (item.productName.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    // setprodudicts(filterBySearch);
    dispatch(productActions.setSearchResult(filterBySearch));
    console.log(filterBySearch);
  }

  useEffect(() => {
    if (item === "" || item === null) setIsLoggedin(false);
    else setIsLoggedin(true);
  }, []);
  return (
    <Navigation
      isLoggedin={isLoggedin}
      logo={logo}
      FontAwesomeIcon={FontAwesomeIcon}
      faMagnifyingGlass={faMagnifyingGlass}
      faCartShopping={faCartShopping}
      faBars={faBars}
      setSearchValue={setSearchValue}
      products={products}
      handleSearchClick={handleSearchClick}
      search={search}
    />
  );
}
