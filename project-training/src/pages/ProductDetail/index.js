import axios from "axios";
import { ProductDetail } from "../../template/ProductDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function ProductDetails() {
  const [productdetail, setproductdetail] = useState([]);
  const { productid } = useParams();

  //Render star of product
  function renderStar(num) {
    let stars = [];
    for (let i = 0; i < num; i++)
      stars.push(<FontAwesomeIcon icon={faStar} className="right-0 items-center justify-center" style={{ color: "#fff700", }} />)
    return <React.Fragment>{stars}</React.Fragment>
  }

  //Call API product for Detail page
  async function fetchDataProductDetails() {
    await axios
      .get(`https://61bfdf3ab25c3a00173f4f15.mockapi.io/products`)
      .then(function (res) {
        // console.log(res.data);
        const filteredProducts = res.data.filter(product => product.id == productid);
        // console.log("filter", filteredProducts);
        const result = filteredProducts.map(product => (product));
        // console.log("result", result);
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
  }, []);

  return (

    <ProductDetail
      renderStar={renderStar}
      productdetail={productdetail}
    />
  );
}


