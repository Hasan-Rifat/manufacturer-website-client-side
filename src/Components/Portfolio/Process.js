import React from "react";
import img from "../../image/coding.jpg";
import p4 from "../../image/portofolio/4.jpg";
const Process = () => {
  return (
    <section className=" max-w-7xl mx-auto px-4">
      <div class="hero py-24 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div className="text-left ">
            <h1 class="text-4xl text-accent font-bold ">About me</h1>
            <p class="text-xl text-accent pb-5 ">
              <small>
                I’m working minimum of 13-14 hours every day, I love to do this
                it’s my life-everything. My goal is to satisfy clients, try to
                understand what they want for there website, help them from
                beginning to end the project and give support for every problem.
                If need I communicate by video or audio conversations to
                understand the problems and project requirements. After
                completing website and projects I give instructions, How they
                can manage, edit, update, add page and post on the website by
                themselves. if needed I send video tutorials.
              </small>
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                html
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                css
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                javascript
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                bootstrap
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                tailwindcss
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                react js
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                node js
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                express js
              </p>

              <p class="  rounded-none  p-4 border-none hover:bg-secondary  hover:text-white text-accent font-semibold px-8 py-3 bg-primary">
                Mongodb
              </p>
            </div>
          </div>
          <div className="">
            <img src={p4} class="w-50 mx-auto " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
