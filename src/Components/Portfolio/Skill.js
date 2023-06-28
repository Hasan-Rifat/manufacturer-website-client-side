import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import p1 from "../../image/portofolio/1.png";
import p2 from "../../image/portofolio/2.png";
import p3 from "../../image/portofolio/3.png";

import { FreeMode, Pagination } from "swiper";

import img from "../../image/50.jpg";

const Skill = () => {
  const sidler = [
    {
      img: p1,
      text: "Portfolio 1",
      id: 1,
      url: "https://assignment-10-b8408.web.app",
    },
    {
      img: p2,
      text: "Portfolio 2",
      id: 2,
      url: "https://hasan-rifat-assignment-9.netlify.app/",
    },
    {
      img: p3,
      text: "Portfolio 3",
      id: 3,
      url: "https://assignment-11-306c4.web.app/",
    },
    {
      img: p1,
      text: "Portfolio 1",
      id: 4,
      url: "https://assignment-10-b8408.web.app",
    },
  ];
  return (
    <section
      className=" py-12 "
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 pb-20 ">
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="py-4">
          <h2 className="text-5xl font-bold text-white ">Portfolios</h2>
          <div className="divider bg-primary h-1 w-28 mx-auto"></div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {sidler.map((s, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 shadow-2xl w-full">
                  <div className="card-body justify-center">
                    <div className="avatar">
                      <div className="w-40 mx-auto rounded">
                        <img src={s.img} alt="" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h2 className="font-bold text-xl text-accent text-center py-4 my-2">
                        <small>
                          <a
                            className=" p-4 border-none hover:bg-primary bg-secondary  text-white hover:text-accent font-semibold px-8 py-3  rounded-2xl shadow-2xl"
                            href={s.url}
                          >
                            {s.text}
                          </a>
                        </small>
                      </h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Skill;
