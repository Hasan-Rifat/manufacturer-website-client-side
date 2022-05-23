import React from "react";

const Star = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto shadow-2xl rounded ">
        <div class="  grid grid-cols-3 p-5">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class=" text-secondary font-bold">Total Likes</div>
            <div class="stat-value text-accent">25.6K</div>
            <div class=" text-md font-semibold text-neutral">
              21% more than last month
            </div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class=" text-neutral font-bold">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="text-accent">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <div class="avatar online">
                <div class="w-16 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?w=128&h=128"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="stat-value text-neutral">86%</div>
            <div class="stat-title text-accent font-semibold">Tasks done</div>
            <div class=" text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Star;
