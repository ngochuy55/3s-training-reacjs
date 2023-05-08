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
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useProducts } from "../../Store";

function Home({
  categories,
  prices,
  products,
  visible,
  isMore,
  loading,
  showMoreProducts,
  collapseProducts,
  categoryActive,
  priceActive,
  handleActive,
  handlePriceActive,
}) {
  // console.log(products);
  const [state, dispatch] = useProducts();
  return (
    <React.Fragment>
      <section className="bg-[#f8f9fa]">
        <Navbar />

        <main className="container pt-[56px] place-items-center mr-32 ml-32 shadow-lg">
          <div className="mt-4 basis-1/4 h-4/5">
            <Slider />
          </div>
          <div className="flex">
            <div className="col-3 p-0 p-r-30 ">
              <div className="text-left items-center mb-[5rem] pt-[20px] ">
                <h3 className="text-[#0a58ca]">Danh mục</h3>
                <ul>
                  <li className="m-2">
                    <button
                      onClick={() => handleActive(0)}
                      className={
                        categoryActive === 0 ? "hightlight text-red-600  " : ""
                      }
                    >
                      Tất cả
                    </button>
                  </li>
                  {categories.map((category) => (
                    <div key={category.id} className="">
                      <li className="m-2 active:text-[red]">
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
                    </div>
                  ))}
                </ul>
              </div>
              <div className="text-left items-center">
                <h3 className="text-[#0a58ca]"> Mức giá</h3>
                <ul>
                  <li className="m-2">
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
                    <div className="m-auto">
                      <img
                        src="https://fptshop.com.vn/Content/v5d/images/noti-search.png"
                        className="w-50 mx-auto h-50 mt-[100px] "
                        alt=""
                      />
                      <p>
                        Rất tiếc chúng tôi không tìm thấy kết quả theo yêu cầu
                        của bạn Vui lòng thử lại .
                      </p>
                    </div>
                  ) : (
                    prices.map((price) => (
                      <div key={price.id} className="">
                        <li className="m-2">
                          <button
                            onClick={() => {
                              handlePriceActive(
                                price.id,
                                price,
                                categoryActive
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
                      </div>
                    ))
                  )}
                </ul>
              </div>
            </div>

            <div className="pt-[20px] pb-[20px] bg-white w-full mb-[20px]">
              <p className="hilight1 text-red-600">
                Tìm thấy {products?.length} kết quả với từ khóa "
                {state.searchName}"
              </p>
              <div className="flex-1 flex flex-wrap">
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
                      className="block w-1/3 hover:border-[0.5px] hover:bg-[transparent] transform  duration-500 mb-[25px]"
                    >
                      <div className="relative max-w-[20rem] mt-[2rem] h-[40%] flex justify-center">
                        <img
                          className="transform  duration-500 hover:scale-110 max-w-[15rem]"
                          src={product.image}
                          alt="ảnh về 1 chiếc điện thoại"
                        />
                        <div className="w-[3rem] h-[3rem] rounded-[50%] bg-[#ea9d02] absolute z-2 flex justify-center text-[#fff] top-0 right-[40px] items-center">
                          {" "}
                          -{product.discount}%
                        </div>
                      </div>
                      <div className="block h-[30%]">
                        <h5 className="mt-[2rem] ml-[20px] ">
                          <Link
                            className="no-underline"
                            to={`/chi-tiet-san-pham/${product.id}`}
                          >
                            {product.productName}
                          </Link>
                        </h5>
                        <div className="hidden">{product.specifications}</div>
                        <div className="flex items-center justify-between w-[60%]">
                          <p className="ml-[25%]">
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
                        <div className="h-[20%] flex justify-between w-[80%] items-center">
                          <div className="bg-[#cb1c22] ml-[20px] w-[9rem] text-[#fff] text-[18px] leading-[28px] text-center rounded-[15px]">
                            {product.priceAfterDisStr}
                          </div>
                          <strike className="text-[#919191] text-[14px] leading-[15px] text-right">
                            {product.priceStr}
                          </strike>
                        </div>
                      </div>
                      <div className=" flex justify-between h-[20%] w-[80%]">
                        <button className="bg-[#cb1c22] ml-[20px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[7rem] hover:bg-[#23E8E8]">
                          <FontAwesomeIcon icon={faCartShopping} />
                          <a
                            className="no-underline text-[#fff] hover:text-[#fff]"
                            href={`/chi-tiet-san-pham/${product.id}`}
                          >
                            {" "}
                            Mua Ngay
                          </a>
                        </button>
                        <button className="bg-[#43e851] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[30px] w-[7rem] hover:bg-[#FF8C00]">
                          <FontAwesomeIcon icon={faCartPlus} />{" "}
                          <a
                            className="no-underline text-[#fff] hover:text-[#fff]"
                            href="/#"
                          >
                            Thêm vào giỏ
                          </a>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div>
                {isMore ? (
                  <div className=" justify-center flex m-auto">
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
