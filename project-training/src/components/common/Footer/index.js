// import "../../../assets/css/Footer.css";

export function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted position-static">

      <section className="container">
        <div
          className="container text-center text-md-start mt-5  mx-0 w-100 pt-1 "
          style={{ minHeight: "325px" }}
        >
          <div className="row mt-3 w-100 ">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>3s shop
              </h6>
              <p>
                3S Shop là chuỗi cửa hàng bán lẻ chuyên về các sản phẩm kỹ thuật số.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sản Phẩm</h6>
              <p>
                <a href="#!" className="text-reset">
                  Iphone
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Samsung
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vivo
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Oppo
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Xiaomi
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Realme
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tiện ích</h6>
              <p>
                <a href="#!" className="text-reset">
                  Hệ thống cửa hàng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chính sách đổi trả
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hệ thống bảo hành
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Giúp đỡ khách hàng!
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <i className="fas fa-home me-3"></i> Việt Nam
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                3sshop@3si.vn
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 1800 6601 (hỗ trợ khách hàng)
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 1800 6616 (góp ý, khiếu nại)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div
        className="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </footer>
  );
}
