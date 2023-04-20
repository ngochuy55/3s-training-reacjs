import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const [slider, setSliders] = useState([]);
  const fetchSlider = async () => {
    await axios
      .get("https://621f1457311a705914ff929e.mockapi.io/slides")
      .then(function (res) {
        setSliders(res.data);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () {});
  };
  useEffect(() => {
    fetchSlider();
  }, []);
  return (
    <Carousel className="my-6 s3">
      {slider.map((slider) => (
        <Carousel.Item interval={1000}>
          <React.Fragment>
            <img className="d-block w-100" src={slider.image} />
            <Carousel.Caption></Carousel.Caption>
          </React.Fragment>
        </Carousel.Item>
      ))}
      {/* <img
          className="d-block w-100"
          src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/1/638159396595004747_F-C1_1200x300.png"
          alt="First slide"
        /> */}

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/5/638162927951359069_F-C1_1200x300.png"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/8/638165124161764659_F-C1_1200x300.png"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;
