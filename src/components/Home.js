import React from "react";
import Cards from "./Cards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  return (
    <div className="min-h-[calc(100vh-244px-64px)]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="w-full text-4xl text-center mt-4 mb-2 font-bold text-white">
        Categories
      </div>
      <div className="h-1 rounded-full mx-[40rem] bg-white"></div>
      <div className="card-contain flex flex-wrap justify-center mt-4">
        <Cards title="International Jerseys" link="/allproducts" />
        <Cards title="Design Concepts" link="/allproducts" />
        <Cards title="League Jerseys" link="/allproducts" />
      </div>
    </div>
  );
}

export default Home;
