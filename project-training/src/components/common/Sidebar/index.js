import axios from "axios";
import React, { useEffect, useState } from "react";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Sidebar() {
  const [categories, setCategories] = useState([])


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


  useEffect(() => {
    fetchCategories()

  }, [])
  return (
    <React.Fragment>
      {categories.map((category) =>
        <div key={category.id} className='row'>
          <li className='categories_name col' ><a className='menu_label' >{category.categoryName}</a>
          </li>
          <FontAwesomeIcon className="right_icon col" icon={faChevronRight} />
        </div>
      )}
    </React.Fragment>
  )
}