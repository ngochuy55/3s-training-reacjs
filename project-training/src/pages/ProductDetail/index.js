import axios from "axios";
import { ProductDetailTemplate } from "../../template/ProductDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { productActions, useProducts } from "../../Store";

export function ProductDetail() {
  document.title = "Chi tiết sản phẩm"
  const [productdetail, setproductdetail] = useState([]);
  const { id } = useParams();
  const [description, setdescription] = useState(0);
  const [activetab, setIsActivetab] = useState(false);
  const [activecolor, setIsActivecolor] = useState(false);

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

  function handleClickcolor(state) {
    setIsActivecolor(!activecolor)
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
    />
  );
}


