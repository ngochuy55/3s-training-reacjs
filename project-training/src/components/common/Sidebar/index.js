import axios from "axios";
import React, { useEffect, useState } from "react";
import { faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Sidebar() {
  const [categories, setCategories] = useState([])
  const [prices, setPrices] = useState([])

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
  useEffect(() => {
    fetchCategories()
    fetchPrices()
  }, [])
  return (
    <React.Fragment>
      <div className='categories_heading_cotainer'>
        <h3 className="categories_heading"><FontAwesomeIcon className='Bars_icon' icon={faBars} /> Danh mục</h3>
        <ul className="categories">
          {categories.map((category) =>
            <div key={category.id} className='row'>
              <li className='categories_name col' ><a className='menu_label' >{category.categoryName}</a>
              </li>
              <FontAwesomeIcon className="right_icon col" icon={faChevronRight} />
            </div>
          )}
        </ul>
      </div>
      <div className='categories_heading_cotainer'>
        <h3 className="categories_heading"><FontAwesomeIcon className='Bars_icon' icon={faBars} /> Mức giá</h3>
        <ul className="categories">
          {prices.map((price) =>
            <div key={price.id} className='row'>
              <li className='categories_name col' ><a className='menu_label' >{price.name}</a>
              </li>
              <FontAwesomeIcon className="right_icon col" icon={faChevronRight} />
            </div>
          )}
        </ul>
      </div>
    </React.Fragment>
  )
}