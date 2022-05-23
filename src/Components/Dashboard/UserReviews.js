import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import img from "../../image/row-bgimage-1.png";

const UserReviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section
      className="pb-12"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="max-w-7xl mx-auto pb-20 ">
        <div
          class="hero-overlay bg-opacity-60 "
          /* style={{
            gridColumnEnd: 1,
            gridRowStart: 1,
            height: "100%",
            backgroundColor: "#02112b",
          }} */
        ></div>
        <div className="py-4">
          <h5 className="text-2xl font-semibold text-accent">TESTIMONIAL</h5>
          <h2 className="text-5xl font-bold text-accent py-3">
            What Our Customers Saying
          </h2>
          <div class="divider bg-primary h-1 w-28 mx-auto"></div>
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
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div class="card bg-base-100 shadow-2xl">
                <div class="card-body justify-center">
                  <div class="avatar justify-center">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://api.lorem.space/image/face?hash=3174"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 class="font-bold text-xl text-accent text-center py-4">
                      {review.name}
                    </h2>
                    <p class="text-accent text-center">
                      If a dog chews shoes whose shoes does he choose?
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UserReviews;
