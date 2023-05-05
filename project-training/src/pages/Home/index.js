import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../../template/Home";
import Loading from "../Loading";

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
  const [loading, setLoading] = useState(false);

  //lọc theo sản phẩm
  const handleActive = (id, category) => {
    setCategoryActive(id);
    fetchDataWithCategory(category);
  };

  //lọc theo giá
  const handlePriceActive = (id, price, categoryId) => {
    setPriceActive(id);
    fetchDataWithPrice(price, categoryId);
  };

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
    setLoading(true);
    await axios
      .get("https://621f1457311a705914ff929e.mockapi.io/categories")
      .then(function (res) {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      })
      .finally(function () {});
  }
  //Call API Prices Sidebar
  async function fetchPrices() {
    setLoading(true);
    await axios
      .get("https://641bf1d81f5d999a446d48f8.mockapi.io/prices")
      .then(function (res) {
        setPrices(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
        setPrices([]);
      })
      .finally(function () {});
  }

  //Call API Products
  const fetchData = async () => {
    setLoading(true);
    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        setproducts(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      })
      .finally(function () {});
  };
  //Call API and get products with categories
  async function fetchDataWithCategory(categoriesid) {
    setLoading(true);
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
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        // setproducts([]);
      })
      .finally(function () {});
  }

  //Call API and get products with price
  async function fetchDataWithPrice(Price, categoriesid) {
    setLoading(true);
    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        if (Price === undefined) {
          setproducts(res.data);
        } else {
          const filteredProducts = res.data.filter(
            (product) =>
              product.priceAfterDis > Price.valueFrom &&
              product.priceAfterDis < Price.valueTo
          );
          if (filteredProducts.length > 0) {
            const result = filteredProducts.map((product) => product);
            setproducts(result);
          } else {
            console.log("ko có điện thoại");
            setproducts([]);
          }
        }
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {});
  }

  useEffect(() => {
    fetchData();
    fetchCategories();
    fetchPrices();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Home
      notfound={notfound}
      products={products}
      categories={categories}
      prices={prices}
      fetchDataWithCategory={fetchDataWithCategory}
      fetchDataWithPrice={fetchDataWithPrice}
      visible={visible}
      isMore={isMore}
      loading={loading}
      showMoreProducts={showMoreProducts}
      collapseProducts={collapseProducts}
      categoryActive={categoryActive}
      priceActive={priceActive}
      handleActive={handleActive}
      handlePriceActive={handlePriceActive}
    />
  );
}
