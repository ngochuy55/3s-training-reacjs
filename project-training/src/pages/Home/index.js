import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../../template/Home";
import Loading from "../Loading";
import { productActions, useProducts } from "../../Store";

export function HomePage() {
  document.title = "HomePage";
  const [products, setproducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [notfound, setNotfound] = useState(false);
  const [prices, setPrices] = useState([]);

  const [visible, setVisible] = useState(9);
  const [isMore, setIsMore] = useState(true);
  const [categoryActive, setCategoryActive] = useState(0);
  const [priceActive, setPriceActive] = useState(0);
  const [showCategories, setShowCategories] = useState(false);
  const [showPrices, setShowPrices] = useState(false);


  const [productState, dispatch] = useProducts();
  const [filter, setFilter] = useState({
    categoryId: 0,
    from: null,
    to: null,

  })
  const [cartItems, setCartItems] = useState([])

  //lọc theo sản phẩm
  const handleActive = (id, category) => {
    setCategoryActive(id);
    fetchDataWithCategory(category);
    setFilter({
      ...filter, categoryId: id
    })

  };

  //lọc theo giá
  const handlePriceActive = (id, price) => {
    setPriceActive(id);
    // fetchDataWithPrice(price, categoryId);
    setFilter({
      ...filter, from: id === 0 ? null : price.valueFrom, to: id === 0 ? null : price.valueTo
    })

  };

  useEffect(() => {

    if (filter) {
      fetchDataWithPrice();
    }
  }, [filter]);


  //show products
  const showMoreProducts = () => {
    setIsMore(false);
    setVisible(products.length);
  };
  //collapse
  const collapseProducts = () => {
    setIsMore(true);
    setVisible(9);
  };

  //Call API Categories Sidebar
  async function fetchCategories() {

    await axios
      .get("https://621f1457311a705914ff929e.mockapi.io/categories")
      .then(function (res) {
        setCategories(res.data);

      })
      .catch(function (err) {
        console.log(err);

      })
      .finally(function () { });
  }
  //Call API Prices Sidebar
  async function fetchPrices() {

    await axios
      .get("https://641bf1d81f5d999a446d48f8.mockapi.io/prices")
      .then(function (res) {
        setPrices(res.data);

      })
      .catch(function (err) {
        console.log(err);

        setPrices([]);
      })
      .finally(function () { });
  }

  //Call API Products
  const fetchData = async () => {

    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        setproducts(res.data);
        dispatch(productActions.setSearchResult(res.data));

      })
      .catch(function (err) {
        console.log(err);

      })
      .finally(function () { });
  };
  //Call API and get products with categories
  async function fetchDataWithCategory(categoriesid) {

    await axios
      .get(`https://61bfdf3ab25c3a00173f4f15.mockapi.io/products`)
      .then(function (res) {
        const filteredProducts = res.data.filter(
          (product) => product.categoryId === categoriesid
        );
        if (categoriesid === undefined) {
          setproducts(res.data);
        } else if (filteredProducts.length > 0) {
          const result = filteredProducts.map((product) => product);
          setproducts(result);
        } else {
          setNotfound(false);
        }

      })
      .catch(function (err) {
        console.log(err);
        // setproducts([]);
      })
      .finally(function () { });
  }

  //Call API and get products with price
  async function fetchDataWithPrice(Price, categoriesid) {

    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        let data = []
        if (res.data.length > 0) {
          if (filter.categoryId === 0) {
            if (filter.from === null && filter.to === null)
              data = res.data
            else {
              data = res.data.filter(
                (item) =>
                  item.price >= filter.from && item.price <= filter.to
              );
            }
          }
          else {
            if (filter.from === null && filter.to === null) {
              data = res.data.filter(
                (item) =>
                  item.categoryId === filter.categoryId
              );
            }
            else {
              data = res.data.filter(
                (item) =>
                  item.categoryId === filter.categoryId && item.price >= filter.from && item.price <= filter.to
              );
            }
          }
          setproducts(data)

        }
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () { });
  }
  //Addd Product to cart
  const handleAddToCart = (item) => {
    // Kiểm tra xem mặt hàng đã có trong giỏ hàng hay chưa
    const existItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existItem) {
      // Nếu mặt hàng đã có trong giỏ hàng, tăng số lượng lên 1
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...existItem, quantity: existItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // Nếu mặt hàng chưa có trong giỏ hàng, thêm vào giỏ hàng với số lượng là 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  //Xoá sản phẩm khỏi giỏ hàng
  const handleDeleteProduct = (productId) => {
    localStorage.removeItem('cartItems');
    const newCart = cartItems.filter(product => product.id !== productId);
    setCartItems(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  }

  //show Categories when responsive
  const handleshowCategories = () => {
    setShowCategories(!showCategories);
  }

  //show Prices when responsive
  const handleshowPrices = () => {
    setShowPrices(!showPrices);
  }
  useEffect(() => {
    fetchData();
    fetchCategories();
    fetchPrices();
  }, []);

  return (
    <Home
      notfound={notfound}
      products={products}
      // products={productState.searchResult}
      categories={categories}
      prices={prices}
      fetchDataWithCategory={fetchDataWithCategory}
      fetchDataWithPrice={fetchDataWithPrice}
      visible={visible}
      isMore={isMore}
      showMoreProducts={showMoreProducts}
      collapseProducts={collapseProducts}
      categoryActive={categoryActive}
      priceActive={priceActive}
      handleActive={handleActive}
      handlePriceActive={handlePriceActive}

      handleAddToCart={handleAddToCart}
      cartItems={cartItems}
      handleDeleteProduct={handleDeleteProduct}
      handleshowCategories={handleshowCategories}
      handleshowPrices={handleshowPrices}
      showPrices={showPrices}
      showCategories={showCategories}
    />
  )
}
