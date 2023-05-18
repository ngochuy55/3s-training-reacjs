import React from "react";
import { Link } from "react-router-dom";

export function Cart({
  showCart,
  handleShowCart,
  cartItems,
  handleDeleteProduct,
  total
}) {
  return (
    <React.Fragment>
      <div
        className={`${showCart ? "animate-slide-right" : "animate-slide-left"
          }  
                  w-full max-w-full bg-white shadow-xl fixed overflow-auto top-[56px]
                   right-0 h-full sm:w-[500px] sm:max-w-[40vw] transition-all duration-300 z-50`}
      >
        <div className="flex-1 sm:w-full sm:max-w-full overflow-y-auto px-4 py-6 sm:px-6 ">
          <div className="flex items-start justify-between">
            <h2 className="">Giỏ hàng</h2>
          </div>

          <div className="flex items-center justify-center my-2">
            <button onClick={handleShowCart}>
              <svg
                className="h-6 w-6 absolute right-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-8">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200 overflow-y-auto max-h-[450px]">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-[2rem] text-gray-900">
                          <h3>
                            <a
                              className="no-underline text-[#000]"
                              href={`chi-tiet-san-pham/${item.id}`}
                            >
                              {item.productName}
                            </a>
                          </h3>
                          <p className="ml-4">
                            {item.priceAfterDisStr}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          Số lượng: {item.quantity}
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => handleDeleteProduct(item.id)}
                          >
                            Xoá
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Tổng:</p>
                <p>{total.toLocaleString("en-US")}đ</p>
              </div>
            </div>
            <button
              className="w-full bg-slate-600 text-white h-10 rounded-[5px]"
            >
              <Link className="no-underline text-white" to="/Checkout" >
                Đặt hàng</Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}