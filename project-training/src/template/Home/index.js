import { Navbar } from "../../components/common/Navigation";
import React from "react";
import Slider from "../../components/common/Slider";
import "../../assets/css/Slider.css";
import { Footer } from "../../components/common/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCartPlus, faMemory } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Home(
  {
    fetchDataWithPrice,
    fetchDataWithCategory,
    categories,
    prices,
    products
  }
) {
  return (
    <React.Fragment>
      <section className="bg-[#f8f9fa]">
        <Navbar />

        <main className=" md: container pt-[56px] place-items-center mr-32 ml-32 shadow-lg">
          <div className="basis-1/4 h-4/5">
            <Slider />
          </div>
          <div className="flex">
            <div className="col-3 p-0 p-r-30">
              <div className='items-center mb-[5rem] pt-[20px]'>
                <h3 className="text-[#0a58ca]">Danh mục</h3>
                <ul className="text-left" >
                  <li><button onClick={() => fetchDataWithCategory()}>Tất cả</button></li>
                  {categories.map((category) =>
                    <div key={category.id} className=''>
                      <li className='active:text-[red]' ><button onClick={() => fetchDataWithCategory(category.id)}>{category.categoryName}</button>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
              <div className='items-center'>
                <h3 className="text-[#0a58ca]"> Mức giá</h3>
                <ul className="text-left">
                  <li><button onClick={() => fetchDataWithPrice()}>Tất cả</button></li>
                  {prices.map((price) =>
                    <div key={price.id} className=''>
                      <li className='' ><button onClick={() => fetchDataWithPrice(price)} >{price.name}</button>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>

            <div className="pt-[20px] pb-[20px] flex-1 flex flex-wrap shadow-sm">
              {products.map((product) => (
                <div key={product.id} className="block w-1/3 hover:bg-[#f8f9fa] transform  duration-500 mb-[25px]" >
                  <div className="relative max-w-[20rem] mt-[2rem] h-[40%] flex justify-center">
                    <img className="transform  duration-500 hover:scale-110 max-w-[15rem]" src={product.image} alt="ảnh về 1 chiếc điện thoại" />
                    <div className='w-[3rem] h-[3rem] rounded-[50%] bg-[#ea9d02] absolute z-2 flex justify-center text-[#fff] top-0 right-[40px] items-center'> -{product.discount}%</div>
                  </div>
                  <div className="block h-[30%]">
                    <h5 className="mt-[2rem] ml-[20px] "><Link className="no-underline" to={`/chi-tiet-san-pham/${product.id}`}>{product.productName}</Link></h5>
                    <div className="hidden">{product.specifications}</div>
                    <div className='flex items-center justify-between w-[60%]'>
                      <p className='ml-[25%]'><FontAwesomeIcon icon={faMemory} /> {product.ram}GB</p>
                      <p className='' ><FontAwesomeIcon icon={faMemory} />{product.gb}GB</p>
                    </div>
                    <div className='h-[20%] flex justify-between w-[80%] items-center'>
                      <div className='bg-[#cb1c22] ml-[20px] w-[9rem] text-[#fff] text-[18px] leading-[28px] text-center rounded-[15px]'>{product.priceAfterDisStr}</div>
                      <strike className='text-[#919191] text-[14px] leading-[15px] text-right'>{product.priceStr}</strike>
                    </div>
                  </div>
                  <div className=" flex justify-between h-[20%] w-[80%]">
                    <button className='bg-[#cb1c22] ml-[20px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[7rem]'><FontAwesomeIcon icon={faCartShopping} /> Mua Ngay</button>
                    <button className='bg-[#43e851] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[7rem]' ><FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ</button>
                  </div>
                </div >
              ))}
            </div></div>
        </main >
        <Footer />
      </section >
    </React.Fragment >
  );
}

export default Home;
