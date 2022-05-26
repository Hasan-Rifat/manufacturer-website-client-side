import React from "react";
import p4 from "../../image/portofolio/4.jpg";
import {
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";

import email from "../../image/portofolio/email.svg";
import address from "../../image/portofolio/location.svg";
import phone from "../../image/portofolio/phone.svg";

const Process = () => {
  return (
    <section className=" lg:py-20 max-w-7xl mx-auto px-4">
      <div className="">
        <div className="w-2/4 mx-auto pb-10">
          <h1 className="text-3xl text-accent font-bold uppercase">Skill</h1>
          <div className="divider bg-primary h-1 w-28 mx-auto"></div>
          <ul className=" grid lg:grid-cols-9 md:grid-cols-9 grid-cols-9 gap-4 ">
            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <SiHtml5 className="" />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <DiCss3 />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <SiBootstrap />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <SiTailwindcss />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <SiJavascript />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <FaReact />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <FaNodeJs />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <SiExpress />
            </li>

            <li className="w-8 h-8 flex justify-center items-center rounded-2xl  border-none hover:bg-primary bg-secondary hover:text-accent  text-white font-semibold text-center">
              <SiMongodb />
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div className="text-left ">
            <h1 className="text-4xl text-accent font-bold ">About me</h1>
            <p className="text-xl text-accent pb-5 ">
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
            <div></div>
          </div>
          <div className="">
            <img src={p4} className="w-50 mx-auto " alt="" />
          </div>
        </div>

        <div class="container my-24 px-6 mx-auto">
          <section class="mb-32 text-gray-800">
            <div class="block rounded-lg shadow-lg bg-white">
              <div class="flex flex-wrap items-center">
                <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                  <div
                    class="map-container-2 w-full"
                    style={{ height: "500px" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29281.63369610054!2d91.16580085484914!3d23.45309724338645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1653495803147!5m2!1sen!2sbd"
                      class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      frameborder="0"
                      allowfullscreen
                      title="map"
                    ></iframe>
                  </div>
                </div>
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div class="grid grid-cols-1 gap-5 px-40">
                    <div class="mb-12 w-full">
                      <div class="flex items-center justify-start">
                        <div class="shrink-0">
                          <div class="p-4 bg-[#ffd000] rounded-md shadow-md w-14 h-14 flex items-center justify-start">
                            <img src={address} alt="" />
                          </div>
                        </div>
                        <div class="ml-6">
                          <p class="font-bold mb-1 text-left">Address:</p>
                          <p class="text-gray-500">Comilla, Bangladesh</p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12  w-full">
                      <div class="flex items-center justify-start">
                        <div class="shrink-0">
                          <div class="p-4 bg-[#ffd000] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img src={email} alt="" />
                          </div>
                        </div>
                        <div class="ml-6">
                          <p class="font-bold mb-1 text-left">Email:</p>
                          <p class="text-gray-500">
                            contacthasanrifat@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12  w-full  ">
                      <div class="flex align-center justify-start">
                        <div class="shrink-0">
                          <div class="p-4 bg-[#ffd000] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img src={phone} alt="" />
                          </div>
                        </div>
                        <div class="ml-6">
                          <p class="font-bold mb-1 text-left">Phone:</p>
                          <p class="text-gray-500">01768227738</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Process;
