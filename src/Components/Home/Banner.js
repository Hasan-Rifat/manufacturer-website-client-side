import React from "react";
import banner1 from "../../image/slider-mainbg-001.jpg";
import banner2 from "../../image/slider-mainbg-002.jpg";
import img from "../../image/slider-mainbg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <section className=" w-full bg-white ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            class="hero py-24 lg:py-52"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div class="hero-content flex-col lg:flex-row gap-20">
              <div className="w-50 shrink-1">
                <img src={img} class="w-50 " alt="" />
              </div>
              <div className="text-left w-50 shrink-0">
                <p class="py-6 text-secondary text-base">
                  {" "}
                  Sliding Compound Miter Saw
                </p>
                <h1 class="text-5xl text-accent font-bold ">
                  Mad Sell Goods at a{" "}
                </h1>
                <h1 class="text-5xl font-bold text-neutral py-4">
                  Save Up To $29
                </h1>
                <p class="text-5xl text-accent pb-5 font-bold">Instantly</p>
                <button className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="hero py-24 lg:py-48"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div class="hero-content flex-col lg:flex-row gap-20">
              <div className="w-50 shrink-1">
                <img src={img} class="w-50 " alt="" />
              </div>
              <div className="text-left w-50 shrink-0">
                <p class="py-6 text-secondary text-base">
                  {" "}
                  Mad Sell Goods at a
                </p>
                <h1 class="text-5xl text-accent font-bold ">
                  Discount 20% Off
                </h1>
                <h1 class="text-5xl font-bold text-neutral py-2">
                  Until of January!
                </h1>
                <p class="text-5xl text-accent pb-5 font-bold">Instantly</p>
                <button className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
