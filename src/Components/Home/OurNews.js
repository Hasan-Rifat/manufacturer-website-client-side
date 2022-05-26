import React from "react";
import b1 from "../../image/b1.jpg";
import b2 from "../../image/b2.jpg";
import b3 from "../../image/b3.jpg";

const OurNews = () => {
  return (
    <section>
      <div className="pb-20 max-w-7xl mx-auto px-4 ">
        <div className="py-4">
          <h5 className="text-2xl font-semibold text-accent">OUR BLOG</h5>
          <h2 className="text-5xl font-bold text-accent py-1">
            Our Latest News
          </h2>
          <div className="divider bg-primary h-1 w-28 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card bg-base-100 shadow-xl border-b-4 border-primary rounded-none">
            <figure>
              <img src={b1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-center pt-1">
                <h2 className="card-title text-left text-accent">
                  Equipping Researchers in the Developing.
                </h2>
                <div className="badge badge-secondary">Admin</div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Products</div>
                <div className="badge">Best</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border-b-4 border-primary rounded-none">
            <figure>
              <img src={b2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-center pt-1">
                <h2 className="card-title text-left text-accent">
                  Simple Steps for Replacing old Tiling{" "}
                </h2>
                <div className="badge badge-secondary">Admin</div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Products</div>
                <div className="badge ">New</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border-b-4 border-primary rounded-none">
            <figure>
              <img src={b3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-center pt-1">
                <h2 className="card-title text-left text-accent">
                  Got a Leaking? Hire an experienced Plumber{" "}
                </h2>
                <div className="badge badge-secondary">Admin</div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Products</div>
                <div className="badge ">Best</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNews;
