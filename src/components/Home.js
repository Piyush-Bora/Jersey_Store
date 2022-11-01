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
import Brands from "./Brands";

function Home() {
  // const [data, setData] = useState(Brands);

  return (
    <div className="min-h-[calc(100vh-244px-64px)] overflow-x-hidden  ">
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
            src="https://www.ps4wallpapers.com/wp-content/uploads/2022/01/2022-01-21_61eafcf9a56a9_wallhaven-96gro1_1920x1080.png"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://wallpaper.dog/large/10928126.jpg"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203420399827&ssbinary=true"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2022/04/13/3355031-68580888-2560-1440.jpg"
            alt=""
            className="h-[30rem] w-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="w-full text-4xl text-center mt-4 mb-2 font-bold text-[#c4d5f0]">
        Categories
      </div>
      {/* <div className="h-1 rounded-full mx-[40rem] bg-[#c4d5f0]"></div> */}
      <div className="card-contain flex flex-wrap justify-center mt-4">
        <Cards title="International Jerseys" link="/allproducts" imgUrl="https://s3.amazonaws.com/nikeinc/assets/10086/Nike_Home_NTK_group_shot_3_RGB_hd_1600.jpg?1334688959" />
        <Cards title="Design Concepts" link="/allproducts" imgUrl="https://blog.spoongraphics.co.uk/wp-content/uploads/2020/concept-kits/15.jpg" />
        <Cards title="League Jerseys" link="/allproducts" imgUrl="https://resources.premierleague.com/photos/2022/07/11/e70a2a5a-603e-4652-81b7-98ce08c9010c/Screenshot-2022-07-11-at-18.24.17.png?width=1350&height=759" />
      </div>

      <div className="w-full text-4xl text-center mt-7 mb-2 font-bold text-[#c4d5f0]">
        Our Partners
      </div>

      <div className="brands w-full flex flex-wrap justify-center mt-4 mb-9">
        {Brands.map((values) => {
          return (
            <div key={values.id} className="flex flex-col bg-slate-400 justify-center items-center shadow-2xl mx-2 my-3 md:my-0 md:mx-4 rounded-2xl ">
              <img src={values.image} alt="" className="w-[11rem] h-[8rem] object-cover rounded-t-2xl" />
              <div className="text-xl font-semibold text-center text-slate-900 p-3">{values.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
