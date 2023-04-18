// import { Footer } from "../../components/common/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { HomePage } from "../../pages/Home";
import { Sidebar } from "../../components/common/Sidebar";
import { Navbar } from '../../components/common/Navigation';
import '../../assets/css/Responsive.css'
import React from 'react';


function Home(

) {
  return (
    <React.Fragment>
      <section>
        <Navbar />
        <main className='main_content'>
          <div className="row nav">
            <div className="col categories_content">
              <div className="col categories_container">
                <div className='categories_heading_cotainer'>
                  <h3 className="categories_heading"><FontAwesomeIcon className='Bars_icon' icon={faBars} /> Danh mục</h3></div>
                <ul className="categories">
                  <Sidebar />
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className='row Slider'>
                <h1>Slider Here</h1>
              </div>
              <div className='row'>
                <div className="card-group content_container">
                  <HomePage />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section >
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Home;
