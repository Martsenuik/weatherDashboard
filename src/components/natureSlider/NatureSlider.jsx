// my API key from pixabay "55027447-f20308090ae9b5def1d57cd96"
import "./natureSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useState, useEffect } from "react";

export const NatureSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=55027447-f20308090ae9b5def1d57cd96&q=nature&image_type=photo`,
    )
      .then((res) => res.json())
      .then((result) => {
        setImages(result.hits);
      });
  }, []);

  const handleClick = (swiper, e) => {
    const clickX = e.clientX;
    const windowWidth = window.innerWidth;

    if (clickX > windowWidth / 2) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <section className="natureSlider">
      <p className="natureSlider-title">Beautiful nature</p>
      <Swiper
        className="swiper"
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={-10}
        initialSlide={5}
        centeredSlidesBounds={true}
        allowTouchMove={false}
        onClick={(swiper, e) => handleClick(swiper, e)}
      >
        {images.map(({ webformatURL }, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img className="swiper-img" src={webformatURL} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
