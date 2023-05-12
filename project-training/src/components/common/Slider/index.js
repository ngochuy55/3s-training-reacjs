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
      .finally(function () { });
  };
  useEffect(() => {
    fetchSlider();
  }, []);

  return (
    <Carousel className="my-6">
      {slider.map((slider) => (
        <Carousel.Item interval={2000} key={slider.id}>
          <React.Fragment>
            <img className="d-block w-full" src={slider.image} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </React.Fragment>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
