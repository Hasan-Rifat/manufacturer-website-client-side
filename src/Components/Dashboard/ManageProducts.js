import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Product from "./Product";

const ManageProducts = () => {
  const { data: products, isLoading } = useQuery("product", () =>
    fetch("product.json").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="max-w-7xl mx-auto px-4 pb-12">
      <div className="py-4">
        <h5 className="text-2xl font-semibold text-accent">HOW IT WORKS</h5>
        <h2 className="text-5xl font-bold text-accent py-3">
          Top Selling Products
        </h2>
        <div class="divider bg-primary h-1 w-28 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </section>
  );
};

export default ManageProducts;
