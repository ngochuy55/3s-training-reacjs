import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeTemplate from "../../template/Home";

export function HomePage() {
  document.title = "Trang chủ";
  const [products, setproducts] = useState([])
  const [categories, setCategories] = useState([])
  const [notfound, setNotfound] = useState(false)
  const [prices, setPrices] = useState([])
  const [cartItems, setCartItems] = useState([])

  const [visible, setVisible] = useState(9)
  const [isMore, setIsMore] = useState(true)
  const [categoryActive, setCategoryActive] = useState(0);
  const [priceActive, setPriceActive] = useState(0);

  //lọc theo sản phẩm
  const handleActive = (id, category) => {
    setCategoryActive(id);
    // fetchDataWithCategory(category);
  };

  //lọc theo giá
  const handlePriceActive = (id, price, categoryId) => {
    setPriceActive(id);
    // fetchDataWithPrice(price, categoryId);
  }


  //show products
  const showMoreProducts = () => {
    setIsMore(false)
    setVisible(18)
  };
  //collapse 
  const collapseProducts = () => {
    setIsMore(true)
    setVisible(9)
  }

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
        setPrices([]);

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
  // async function fetchDataWithCategory(categoriesid) {
  //   await axios
  //     .get(`https://61bfdf3ab25c3a00173f4f15.mockapi.io/products`)
  //     .then(function (res) {
  //       const filteredProducts = res.data.filter(product => product.categoryId === categoriesid);
  //       if (categoriesid === undefined) {
  //         setproducts(res.data)
  //       }
  //       else if (filteredProducts.length > 0) {
  //         const result = filteredProducts.map(product => (product));
  //         setproducts(result);
  //       }
  //       else {
  //         setNotfound(false)
  //       }
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     })
  //     .finally(function () {
  //     });
  // }

  //Call API and get products with price
  // async function fetchDataWithPrice(Price, categoriesid) {
  //   await axios
  //     .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
  //     .then(function (res) {
  //       if (Price === undefined) {
  //         setproducts(res.data)
  //       }
  //       else {
  //         const filteredProducts = res.data.filter(
  //           product => product.priceAfterDis > Price.valueFrom
  //             && product.priceAfterDis < Price.valueTo);
  //         if (filteredProducts.length > 0) {
  //           const result = filteredProducts.map(product => (product));
  //           setproducts(result);
  //         } else {
  //           console.log("ko có điện thoại");
  //           setproducts([]);
  //         }
  //       }
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     })
  //     .finally(function () {

  //     });

  // }

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
  };
  useEffect(() => {
    fetchData()
    fetchCategories()
    fetchPrices()
  }, [])



  return (
    < HomeTemplate
      notfound={notfound}
      products={products}
      categories={categories}
      prices={prices}
      // fetchDataWithCategory={fetchDataWithCategory}
      // fetchDataWithPrice={fetchDataWithPrice}

      visible={visible}
      isMore={isMore}
      showMoreProducts={showMoreProducts}
      collapseProducts={collapseProducts}

      categoryActive={categoryActive}
      priceActive={priceActive}
      handleActive={handleActive}
      handlePriceActive={handlePriceActive}

      cartItems={cartItems}
      handleAddToCart={handleAddToCart}
    />
  )
}