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

export function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [products, setproducts] = useState([]);
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
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   setSearchValue(value);
  // };
  function handleSearchClick() {
    if (search === "") {
      setproducts(products);

      return;
    }
    const filterBySearch = products.filter((item) => {
      if (item.toLowerCase().includes(setSearchValue.toLowerCase())) {
        return item;
      }
    });
    setproducts(filterBySearch);
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
