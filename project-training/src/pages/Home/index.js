import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/Home.css'
import { useContext } from 'react';


//Create a new homepage
//Rename to content
//import content to homepage

export function HomePage() {
  document.title = "HomePage"
  const [products, setproducts] = useState([])
  const ProductsContext = React.createContext();


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
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <ProductsContext.Provider value={products}>
        {products.map((product) => {
          return (
            <div key={product.id} className="card box">
              <div className="content_img">
                <img className="card-img-top" src={product.image} alt="ảnh về 1 chiếc điện thoại" />
                <div className='discount'>Giảm giá {product.discount}%</div>
              </div>
              <div className="card-body">
                <h5 className="card-title product_name">{product.productName}</h5>
                <div className="card-text spectification">{product.specifications}</div>
                <div className='ram_gb_btn'>
                  <button className='ram_btn'><span data-title="RAM">{product.ram}GB</span></button>
                  <button className='gb_btn' ><span data-title="RAM">{product.gb}GB</span></button>
                </div>
                <div className='price'>
                  <div className='new_price'>{product.priceAfterDisStr}</div>
                  <strike className='old_price'>{product.priceStr}</strike>
                </div>
              </div>
              <div className="card-footer">
                <div className='buy_add-to-cart'>
                  <button className='buy_button'><FontAwesomeIcon icon={faCartShopping} /> Mua Ngay</button>
                  <button className='add-to-cart_button' ><FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ</button>
                </div>
              </div>
            </div >
          )
        })}
      </ProductsContext.Provider>
    </React.Fragment >
  )
}