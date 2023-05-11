import { Navbar } from "../../components/common/Navigation";
import React from "react";
import Slider from "../../components/common/Slider";
import "../../assets/css/Slider.css";
import { Footer } from "../../components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCartPlus,
  faMemory,
  faMicrochip,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useProducts } from "../../Store";

function Home({
  categories,
  prices,
  products,
  visible,
  isMore,
  showMoreProducts,
  collapseProducts,
  categoryActive,
  priceActive,
  handleActive,
  handlePriceActive,
  handleAddToCart,
  cartItems,
  handleshowCategories,
  handleshowPrices,
  showPrices,
  showCategories,
}) {
  // console.log(products);
  const [state] = useProducts();
  return (
    <React.Fragment>
      <section className="bg-[#f8f9fa]">
        <Navbar
          cartItems={cartItems}
        />

        <main className="mx-auto px-2.5 lg:max-w-[1024px] lg:px-0 lg:mx-auto pt-[56px] place-items-center mr-32 ml-32">
          <div className="mt-4 basis-1/4 h-4/5">
            <Slider />
          </div>
          <div className="lg:flex">
            <div className="col-0 lg:col-3 p-0 p-r-30 ">
              <div className="mb-0 sm:block text-left items-center sm:mb-[5rem] pt-[20px] ">
                <div className="flex justify-between">
                  <h3 className="text-[#0a58ca]">Danh mục</h3>
                  <button onClick={handleshowCategories}><FontAwesomeIcon className='block sm:hidden' icon={faBars} /></button>
                </div>
                <ul className={`${showCategories ? 'flex' : 'hidden'} 
                  sm:flex flex-row flex-wrap w-full max-w-full md:w-full transition-all duration-300`}>
                  <li className={`m-2 writing-horizontal transform rotate-0 lg:w-full`}>
                    <button
                      onClick={() => handleActive(0)}
                      className={
                        categoryActive === 0 ? "hightlight text-red-600  " : ""
                      }
                    >Tất cả
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id} className={`lg:w-full m-2 active:text-[red]`}>
                      <button
                        // onClick={() => fetchDataWithCategory(category.id)}
                        onClick={() => {
                          handleActive(category.id, category.id);
                        }}
                        className={
                          categoryActive === category.id
                            ? "hightlight text-red-600  "
                            : ""
                        }
                      >
                        {category.categoryName}
                      </button>
                    </li>

                  ))}
                </ul>
              </div>
              <div className="sm:block text-left items-center">
                <div className="flex justify-between ">
                  <h3 className="text-[#0a58ca]"> Mức giá</h3>
                  <button onClick={handleshowPrices}><FontAwesomeIcon className='block sm:hidden' icon={faBars} /></button>
                </div>
                <ul className={`${showPrices ? 'flex' : 'hidden'}
                 sm:flex flex-row flex-wrap w-full max-w-full md:w-full transition-all duration-300`}>
                  <li className="lg:w-full m-2">
                    <button
                      onClick={() => handlePriceActive(0)}
                      className={
                        priceActive === 0 ? "hightlight text-red-600  " : ""
                      }
                    >
                      Tất cả
                    </button>
                  </li>
                  {prices.length === 0 ? (
                    null

                  ) : (
                    prices.map((price) => (

                      <li key={price.id} className="lg:w-full m-2">
                        <button
                          onClick={() => {
                            handlePriceActive(
                              price.id, price
                            );
                            // console.log(price.id, price, categoryActive);
                          }}
                          className={
                            priceActive === price.id
                              ? "hightlight text-red-600  "
                              : ""
                          }
                        >
                          {price.name}
                        </button>
                      </li>

                    ))
                  )}
                </ul>
              </div>
            </div>

            <div className="pt-[20px] pb-[20px] bg-white w-full mb-[20px]">
              {state.searchName ? (
                <p className="hilight1 text-red-600">
                  Tìm thấy {products?.length} kết quả với từ khóa "
                  {state.searchName}"
                </p>
              ) : (
                <React.Fragment></React.Fragment>
              )}

              <div className="block md:flex-1 md:flex flex-wrap">
                {products.length === 0 ? (
                  <div className="m-auto">
                    <img
                      src="https://fptshop.com.vn/Content/v5d/images/noti-search.png"
                      className="w-50 mx-auto h-50 mt-[100px] "
                      alt=""
                    />
                    <p>
                      Rất tiếc chúng tôi không tìm thấy kết quả theo yêu cầu của
                      bạn Vui lòng thử lại .
                    </p>
                  </div>
                ) : (
                  products.slice(0, visible).map((product) => (
                    <div
                      key={product.id}
                      className="flex md:block md:w-1/3 hover:border-[0.5px] hover:bg-[transparent] transform  duration-500 mb-[25px]"
                    >
                      <div className="relative max-w-[20rem] mt-[2rem] h-1/3 flex justify-center">
                        <img
                          className="transform w-full min-h-full object-contain duration-500 hover:scale-110 max-w-[15rem]"
                          src={product.image}
                          alt="ảnh về 1 chiếc điện thoại"
                        />
                        <div className="w-[3rem] flex h-[3rem] rounded-[50%] bg-[#ea9d02] absolute z-2  justify-center text-[#fff] top-0 right-[40px] items-center">
                          {" "}
                          -{product.discount}%
                        </div>
                      </div>
                      <div className="ml-[20px]">
                        <div className="block">
                          <h5 className="mt-[2rem] ml-[20px] ">
                            <Link
                              className="no-underline"
                              to={`/chi-tiet-san-pham/${product.id}`}
                            >
                              {product.productName}
                            </Link>
                          </h5>
                          <div className="hidden">{product.specifications}</div>
                          <div className="flex justify-between">
                            <p className="">
                              <FontAwesomeIcon icon={faMicrochip} /> {product.ram}
                              GB
                            </p>
                            {/* <span>RAM</span> */}
                            <p className="">
                              <FontAwesomeIcon icon={faMemory} />
                              {product.gb}GB
                            </p>
                            {/* <span>Bộ nhớ trong</span> */}
                          </div>
                          <div className="block md:flex justify-between my-[5px]">
                            <div className=" bg-[#cb1c22] xl:-[8rem] 2xl:w-[9rem] text-[#fff] xl:[10px] 2xl:text-[18px] xl:leading-[26px] 2xl:leading-[28px] text-center rounded-[2px]">
                              {product.priceAfterDisStr}
                            </div>
                            <strike className="hidden md:block text-[#919191] text-[14px] leading-[15px] text-right">
                              {product.priceStr}
                            </strike>
                          </div>
                        </div>
                        <div className="block md:flex justify-between lg:mt-3">
                          <button className="bg-[#cb1c22] lg:w-[7rem] lg:mr-[10px] my-[20px] md:my-0 text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[40%] hover:bg-[#23E8E8]">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <a
                              className="no-underline text-[#fff] hover:text-[#fff]"
                              href={`/chi-tiet-san-pham/${product.id}`}
                            >
                              {" "}
                              Mua Ngay
                            </a>
                          </button>
                          <button onClick={() => handleAddToCart(product)} className="bg-[#43e851] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[40%]">
                            <FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div>
                {isMore ? (
                  <div className="justify-center flex m-auto">
                    {products.slice(0, visible).length >= 9 && (
                      <button
                        onClick={showMoreProducts}
                        className="bg-[#33CCFF] ml-[20px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[7rem]"
                      >
                        Xem thêm
                      </button>
                    )}
                  </div>
                ) : (
                  <div className=" justify-center flex m-auto">
                    {products.slice(0, visible).length >= products.length && (
                      <button
                        onClick={collapseProducts}
                        className="bg-[#33CCFF] ml-[20px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[7rem]"
                      >
                        Thu gọn
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </section>
    </React.Fragment>
  );
}

export default Home;
