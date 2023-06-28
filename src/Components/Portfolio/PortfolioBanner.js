import React from "react";
import img from "../../image/my-bg 2.png";

const PortfolioBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div
        className="hero py-24 lg:py-24"
        /* style={{
          backgroundImage: `url(${banner1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }} */
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="text-left shrink-0">
            <h1 className="text-5xl text-accent font-bold ">
              Hi Im Hasan RIfat
            </h1>
            <h1 className="text-5xl font-bold text-neutral py-4">
              Jr. Software Engineer
            </h1>
            <p className="text-xl text-accent pb-5 font-medium">
              I am always aware of the project’s deadline and I try to deliver
              projects timely.
            </p>
            <button className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
              Learn about me
            </button>
          </div>
          <div className="shrink-0 ">
            <img src={img} className="w-3/4 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
