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
import { useLocation } from 'react-router-dom';

export function Navbar({
  cartItems,
  isproductDetail
}) {
  const user = JSON.parse(localStorage.getItem('user'));
  const logo = require("../../../assets/images/logo-fix.png");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [products, setproducts] = useState([]);
  const [productState, dispatch] = useProducts();
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showBars, setShowbars] = useState(false);
  const [showInfor, setShowInfor] = useState(false);

  let item = localStorage.getItem("user");
  const [search, setSearchValue] = useState("");
  const { pathname } = useLocation();
  const isProductDetailPage = pathname.includes('/chi-tiet-san-pham/');

  //fetch api product
  const fetchData = async () => {
    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        setproducts(res.data);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () { });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //handle Search submit
  function handleSearchClick() {
    dispatch(productActions.setSearchName(search));
    if (search === "") {
      dispatch(productActions.setSearchResult(products));

      return;
    }
    const filterBySearch = products.filter((item) => {
      // console.log(item);
      if (item.productName.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    // setprodudicts(filterBySearch);
    dispatch(productActions.setSearchResult(filterBySearch));
    // console.log(filterBySearch);
  }

  //show cart
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  //show sidebar when responsive mode
  const handleShowSidebar = () => {
    setShowbars(!showBars);
  };

  //show popup information
  const handleshowinfo = () => {
    setShowbars(false);
    setShowInfor(!showInfor);
  };

  //Xoá sản phẩm khỏi giỏ hàng
  const handleDeleteProduct = (productId) => {
    const newCart = productState.cart.filter(product => product.id !== productId);
    // setCartItems(newCart);
    dispatch(productActions.setCart(newCart))
  }

  useEffect(() => {
    // console.log("type", typeof (cartItems));
    if (!cartItems.length !== 0) {
      const totalPrice = cartItems.reduce((sum, item) => {
        return sum + item.priceAfterDis * item.quantity;
      }, 0)
      setTotal(totalPrice);
    }
  }, [cartItems])

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

      handleShowSidebar={handleShowSidebar}
      total={total}
      handleShowCart={handleShowCart}
      showCart={showCart}
      showBars={showBars}
      cartItems={cartItems}
      handleDeleteProduct={handleDeleteProduct}
      isproductDetail={isproductDetail}
      handleshowinfo={handleshowinfo}
      showInfor={showInfor}
      user={user}

      isProductDetailPage={isProductDetailPage}
    />
  );
}
