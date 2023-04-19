// import { Footer } from "../../components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HomePage } from "../../pages/Home";
import { Sidebar } from "../../components/common/Sidebar";
import { Navbar } from "../../components/common/Navigation";
import React from "react";
import Slider from "../../components/common/Slider";
import "../../assets/css/Slider.css";

function Home() {
  return (
    <React.Fragment>
      <section>
        <Navbar />
        <main className="main_content">
          <div className="row nav">
            <div className="col categories_content">
              <div className="col categories_container">

                <Sidebar />

              </div>
            </div>
            <div className="col-md s1">
              <div className="row Slider mt-4 my-4 s2 ">
                <div>
                  <Slider />
                </div>
              </div>

              <div className="row">
                <div className="card-group content_container">
                  <HomePage />
                </div>
              </div>
            </div>
          </div>

        </main>
      </section>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Home;
