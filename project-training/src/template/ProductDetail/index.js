import React from "react"
import { Navbar } from "../../components/common/Navigation"
import { Footer } from "../../components/common/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faMobile, faMemory, faMicrochip, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { AiFillChrome, AiOutlineCamera } from "react-icons/ai";
import { BreadCrumb } from "../../components/common/Bread"
import "../../assets/css/Detail.css"


export function ProductDetailTemplate(
  { productdetail,
    description,
    handleClickdescriptions,
    activetab,
    renderStar,
    cartItems
  }
) {
  return (
    <React.Fragment>
      <section className="bg-[#fff]">
        <Navbar
          cartItems={cartItems} />
        <main className="mx-auto px-2.5 lg:container pt-[56px] place-items-center mr-32 ml-32 mb-36">
          {
            productdetail.map((product) =>
              <React.Fragment key={product.id}>
                <BreadCrumb
                  props={product.productName}
                />
                <div className="shadow-lg shadow-[#dee2e6]"></div>
                <div className="flex mb-[16px] leading-[18.2px] pt-[10px] pb-[15px] border-b-2">
                  <h1 className="text-[#212529] w-3/4 font-[Helvetica Neue] text-left flex border-b-2 border-gray-500">{product.productName}</h1>
                  <div className="flex items-center justify-center">
                    <p className="mb-0" >Đánh giá: </p>
                    {renderStar(product.star)}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-4 border-b-2">
                  <div className="mr-0">
                    <img src={product.imageDetail} className="w-full " alt={`Ảnh về chiếc điện thoại ${product.productName}`} />
                  </div>
                  <div className="pl-2">
                    <div className="block lg:flex items-center">
                      <p className="text-[#0a58ca] text-[32px] mr-[20px] text-[500]">{product.priceAfterDisStr}</p>
                      <strike className="text-[#99a2aa] text-[20px] text-left inline">{product.priceStr}</strike>
                    </div>
                    <div className="col my-[2rem] flex">
                      {product.color.map((color, i) =>
                        <div className=" w-[16px] h-[16px]" style={{ background: color, marginLeft: i === 0 ? 0 : "8px" }}>

                        </div>
                        // <button className="mr-9">
                        //   <img
                        //     alt={`Ảnh điện thoại ${product.productName} màu ${color}`}
                        //     className="max-w-[38px] max-h-[38px] hover:border-[#cb1c22]"
                        //     src={product.imageDetail}
                        //   /><span>{color}</span></button>
                      )}
                    </div>
                    <p>{product.description}</p>
                    <div className="mt-5 bg-[#f8f9fa] rounded-[4px] justify-between flex text-[14px] leading-[18.2px] mb-[16px] ">
                      <button className='bg-[#cb1c22] mr-[20px] px-[32px] py-[10px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[50px] w-[50%]'><FontAwesomeIcon icon={faDollarSign} /> Mua Ngay</button>
                      <button className='bg-[#43e851] px-[32px] py-[10px] text-[#fff] text-[12px] leading-[13px] rounded-[4px] text-center h-[50px] w-[50%]' ><FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>

                <div className="mb-[2rem]">
                  <div className="tabs bg-#[#808080] py-[10px]">
                    <ul className="flex">
                      <li className={`mx-[33px] cursor-pointer ${activetab ? '' : 'active'}`} onClick={() => handleClickdescriptions(0)}>Mô tả</li>
                      <li className={`cursor-pointer ${activetab ? 'active' : ''}`} onClick={() => handleClickdescriptions(1)}>Thông số kĩ thuật</li></ul>
                  </div>
                  {description === 1 &&
                    <div className="w-[90%] lg:w-1/2 ml-[2rem] flex text-left leading-[18.2px] px-[15px] py-[20px]">
                      <div>
                        <p><FontAwesomeIcon icon={faMobile} /> Display: {product.display}</p>
                        <p className="flex"><AiFillChrome /> Camera trước: {product.frontCamera}</p>
                        <p className="flex items-center"><AiOutlineCamera /> Camera sau: {product.backCamera}</p>
                        <p><FontAwesomeIcon icon={faMicrochip} /> CPU: {product.cpu}</p>
                        <p><FontAwesomeIcon icon={faMemory} /> Bộ nhớ trong: {product.gb}</p>
                      </div>
                    </div>
                  }
                  {description === 0 &&
                    <div className=" w-[90%] ml-[2rem] ">
                      <p className="h-[171px]">{product.specifications}</p>
                    </div>
                  }
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