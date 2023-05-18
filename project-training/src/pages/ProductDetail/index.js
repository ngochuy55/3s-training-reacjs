import axios from "axios";
import { ProductDetailTemplate } from "../../template/ProductDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars
import { productActions, useProducts } from "../../Store";
import { alertToast } from "../../ultis/functions";
import { toast } from "react-toastify";

export function ProductDetail() {
  document.title = "Chi tiết sản phẩm"
  const [productdetail, setproductdetail] = useState([]);
  const { id } = useParams();
  const [description, setdescription] = useState(0);
  const [activetab, setIsActivetab] = useState(false);
  const [activecolor, setIsActivecolor] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useProducts()

  //Render star of product
  function renderStar(num) {
    let stars = [];
    for (let i = 0; i < num; i++)
      stars.push(<FontAwesomeIcon icon={faStar} className="right-0 items-center justify-center" style={{ color: "#fff700", }} />)
    return <React.Fragment>{stars}</React.Fragment>
  }

  //change to parameters
  function handleClickdescriptions(state) {
    // e.preventDefault();
    setIsActivetab(!activetab);
    setdescription(state)
  }

  function handleClickcolor(index) {
    setIsActivecolor(index)
  }
  //Call API product for Detail page
  function fetchDataProductDetails() {
    axios
      .get(`https://61bfdf3ab25c3a00173f4f15.mockapi.io/products`)
      .then(function (res) {
        const filteredProducts = res.data.filter(product => product.id === parseInt(id));
        const result = filteredProducts.map(product => (product));
        setproductdetail(result)

      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {
      });
  };

  //Add Product to cart
  const handleAddToCart = (item) => {
    // Kiểm tra xem mặt hàng đã có trong giỏ hàng hay chưa
    // const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
    const existItem = state.cart.find((cartItem) => cartItem.id === item.id);
    if (existItem) {
      // Nếu mặt hàng đã có trong giỏ hàng, tăng số lượng lên 1
      dispatch(productActions.setCart(
        state.cart.map((cartItem) =>
          cartItem.id === item.id ? { ...existItem, quantity: existItem.quantity + 1 } : cartItem
        )));
      // eslint-disable-next-line no-unused-expressions
      alertToast(toast, "Sản phẩm đã tồn tại, số lượng đã được cộng thêm ", "warn")

    } else {
      // Nếu mặt hàng chưa có trong giỏ hàng, thêm vào giỏ hàng với số lượng là 1
      dispatch(productActions.setCart([...state.cart, { ...item, quantity: 1 }]));
      alertToast(toast, "Thêm vào giỏ thành công!", "success")

    }
  };
  useEffect(() => {
    fetchDataProductDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductDetailTemplate
      handleClickcolor={handleClickcolor}
      activecolor={activecolor}
      activetab={activetab}
      description={description}
      handleClickdescriptions={handleClickdescriptions}
      renderStar={renderStar}
      productdetail={productdetail}
      cartItems={state.cart}
      handleAddToCart={handleAddToCart}
    />
  );
}


