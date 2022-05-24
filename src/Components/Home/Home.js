import React from "react";
import ManageProducts from "../Dashboard/ManageProducts";
import UserReviews from "../Dashboard/UserReviews";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import OurNews from "./OurNews";
import Services from "./Services";
import Star from "./Star";

const Home = () => {
  return (
    <main>
      <Banner />
      <Star />
      <ManageProducts />
      <Services />
      <OurNews />
      <UserReviews />
      <Footer />
    </main>
  );
};

export default Home;
