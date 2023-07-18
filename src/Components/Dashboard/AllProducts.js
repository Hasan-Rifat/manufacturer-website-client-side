import React, { useEffect, useState } from "react";
import OrderRows from "./OrderRows";

const AllProducts = () => {
  /*   const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-website-server-seven.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []); */
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <h2>all orders</h2>
        {/* <h2>All orders: {orders?.length}</h2>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Product</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <OrderRows
                  order={order}
                  index={index}
                  key={order._id}
                ></OrderRows>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default AllProducts;
