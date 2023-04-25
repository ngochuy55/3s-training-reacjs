import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../../template/Home";
// import { useContext } from 'react';
// import Slider from "../../components/common/Slider";


//Create a new homepage
//Rename to content
//import content to homepage

export function HomePage() {
  document.title = "HomePage"
  const [products, setproducts] = useState([])
  const [categories, setCategories] = useState([])
  const [notfound, setNotfound] = useState(false)
  const [prices, setPrices] = useState([])

  //Call API Categories Sidebar
  async function fetchCategories() {
    await axios
      .get("https://621f1457311a705914ff929e.mockapi.io/categories")
      .then(function (res) {
        setCategories(res.data)
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {
      });
  }
  //Call API Prices Sidebar
  async function fetchPrices() {
    await axios
      .get("https://641bf1d81f5d999a446d48f8.mockapi.io/prices")
      .then(function (res) {
        setPrices(res.data)
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {
      });
  }

  //Call API Products
  const fetchData = async () => {
    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        setproducts(res.data)
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {

      });
  }
  //Call API and get products with categories
  async function fetchDataWithCategory(categoriesid) {
    await axios
      .get(`https://61bfdf3ab25c3a00173f4f15.mockapi.io/products`)
      .then(function (res) {
        const filteredProducts = res.data.filter(product => product.categoryId === categoriesid);
        if (categoriesid === undefined) {
          setproducts(res.data)
        }
        else if (filteredProducts.length > 0) {
          const result = filteredProducts.map(product => (product));
          setproducts(result);
        }
        else {
          setNotfound(false)
        }
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {
      });
  }

  //Call API and get products with price
  async function fetchDataWithPrice(Price) {
    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        if (Price === undefined) {
          setproducts(res.data)
        }
        else {
          const filteredProducts = res.data.filter(product => product.price > Price.valueFrom && product.price < Price.valueTo);
          if (filteredProducts.length > 0) {
            const result = filteredProducts.map(product => (product));
            setproducts(result);
          } else {
            console.log("ko có điện thoại");
          }
        }
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {

      });

  }

  useEffect(() => {
    fetchData()
    fetchCategories()
    fetchPrices()
  }, [])

  return (
    < Home
      notfound={notfound}
      products={products}
      categories={categories}
      prices={prices}
      fetchDataWithCategory={fetchDataWithCategory}
      fetchDataWithPrice={fetchDataWithPrice}
    />
  )
}