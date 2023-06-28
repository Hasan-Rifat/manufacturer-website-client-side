import React from "react";
import Service from "./Service";

const Services = () => {
  /* const service = [
    {
      name: "Free Shipping",
      id: "1",
      text: "Sed rutrum ipsum nunc, at ultrices Loream libero consectetur.",
    },
    {
      name: "100% Money Back",
      id: "2",
      text: "Sed rutrum ipsum nunc, at ultrices Loream libero consectetur.",
    },
    {
      name: "Support 24/7 Days",
      id: "3",
      text: "Sed rutrum ipsum nunc, at ultrices Loream libero consectetur.",
    },
  ]; */
  return (
    <section className="max-w-7xl mx-auto px-4 bg-white py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <Service
          name="Free Shipping"
          text="Sed rutrum ipsum nunc, at ultrices Loream libero consectetur."
          bg="bg-[#f6f9ff]"
          textColor="text-accent"
        ></Service>
        <Service
          name="100% Money Back"
          text="Sed rutrum ipsum nunc, at ultrices Loream libero consectetur."
          bg="bg-primary"
          textColor="text-accent"
        ></Service>
        <Service
          name="Support 24/7 Days"
          text="Sed rutrum ipsum nunc, at ultrices Loream libero consectetur."
          bg="bg-accent"
          textColor="text-white"
        ></Service>
      </div>
    </section>
  );
};

export default Services;
