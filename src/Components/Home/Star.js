import React from "react";

const Star = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto  shadow-2xl rounded ">
        <div className="  grid lg:grid-cols-3 p-5">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className=" text-secondary font-bold">Total Likes</div>
            <div className="stat-value text-accent">25.6K</div>
            <div className=" text-md font-semibold text-neutral">
              21% more than last month
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className=" text-neutral font-bold">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="text-accent">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-value text-neutral">86%</div>
            <div className="stat-title text-accent font-semibold">
              Tasks done
            </div>
            <div className=" text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Star;
