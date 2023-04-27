import React from "react"
import { Navbar } from "../../components/common/Navigation"
import { Footer } from "../../components/common/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons"

export function ProductDetail(
  { productdetail,
    renderStar
  }
) {
  // console.log(productdetail)
  return (
    <React.Fragment>
      <section className="bg-[#f8f9fa]">
        <Navbar />
        <main className="container pt-[56px] place-items-center mr-32 ml-32 shadow-lg">
          {
            productdetail.map((product) =>
              <React.Fragment key={product.id}>
                <p className="font-bold w-full h-[40px] items-center flex text-500 mt-3  shadow-sm"><a className="no-underline" href="/"> Trang chủ</a> / {product.productName}</p>
                <div className="shadow-lg shadow-[#dee2e6]"></div>
                <div className="flex mb-[16px] leading-[18.2px] pt-[10px] pb-[15px]">
                  <h1 className="text-[#212529] w-3/4 font-[Roboto] text-left flex border-b-2 border-gray-500">{product.productName}</h1>
                  <div className="flex items-center justify-center">
                    {renderStar(product.star)}
                  </div>
                </div>

                <div className="flex m-4">
                  <div className="w-1/3 items-center justify-center col mr-0 block">
                    <img src={product.imageDetail} className="text-[14px] text-left leading-[18.2px] max-w-[585px] max-h-[390px]" alt={`Ảnh về chiếc điện thoại ${product.productName}`} />
                  </div>
                  <div className="col pl-2 w-2/3">
                    <div className="flex row ">
                      <p className="text-[#cb1c22] text-[32px] text-[500]">{product.priceStr}</p>
                      <strike className="text-[#99a2aa] text-[20px] text-left inline">{product.priceAfterDisStr}</strike>
                    </div>
                    <div className="col my-[2rem]">
                      {product.color.map(color =>
                        <button className={`mr-9 bg-[${color}]`} key={color}>
                          <img
                            alt={`Ảnh điện thoại ${product.productName} màu ${color}`}
                            className="max-w-[38px] max-h-[38px] hover:border-[#cb1c22]"
                            src={product.imageDetail}
                          />{color}</button>
                      )}
                    </div>
                    <p>{product.specifications}</p>
                    <div className="mt-5 bg-[#f8f9fa] rounded-[4px] justify-between flex text-[14px] leading-[18.2px] mb-[16px] ">
                      <button className='bg-[#cb1c22] mr-[20px] px-[32px] py-[10px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[50px] w-[50%]'><FontAwesomeIcon icon={faCartShopping} /> Mua Ngay</button>
                      <button className='bg-[#43e851] px-[32px] py-[10px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[50px] w-[50%]' ><FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex text-left mb-[16px] leading-[18.2px] px-[15px] py-[20px]">
                  <div>
                    <h3 className="my-[20px] text-[#0a58ca]">Thông số kĩ thuật</h3>
                    <p>Display: {product.display}</p>
                    <p>Camera trước: {product.frontCamera}</p>
                    <p>Camera sau: {product.backCamera}</p>
                    <p>CPU: {product.cpu}</p>
                    <p>Bộ nhớ trong: {product.gb}</p>
                  </div>
                </div>
              </React.Fragment >

            )
          }
        </main>
        <Footer />
      </section >
    </React.Fragment >
  )
}