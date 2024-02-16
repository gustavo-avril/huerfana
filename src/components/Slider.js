import React from 'react';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import '../css/slider.css';
import slide1 from '../img/slider/slide1.webp';
import slide2 from '../img/slider/slide2.webp';
import slide3 from '../img/slider/slide3.webp';
import slide4 from '../img/slider/slide4.webp';

register();

 const Slider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      //console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      //console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      loop="true"
      speed="500"
      autoplay="true"
    >
      <swiper-slide><img src={slide1} alt="Slide1" /></swiper-slide>
      <swiper-slide><img src={slide2} alt="Slide2" /></swiper-slide>
      <swiper-slide><img src={slide3} alt="Slide3" /></swiper-slide>
      <swiper-slide><img src={slide4} alt="Slide4" /></swiper-slide>
    </swiper-container>
  );
};


export default Slider