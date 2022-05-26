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
    fetch("https://assignment-12-server-h.herokuapp.com/review", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
      <div className="max-w-7xl mx-auto px-4 pb-20 ">
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="py-4">
          <h5 className="text-2xl font-semibold text-accent">TESTIMONIAL</h5>
          <h2 className="text-5xl font-bold text-accent py-3">
            What Our Customers Saying
          </h2>
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
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 shadow-2xl w-full">
                  <div className="card-body justify-center">
                    <div className="avatar justify-center">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt="" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h2 className="font-bold text-xl text-accent text-center py-4">
                        <small>{review.name}</small>
                      </h2>
                      <p className="text-accent text-center">
                        <small>{review.review}</small>
                      </p>
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

export default UserReviews;
