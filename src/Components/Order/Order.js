import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const Order = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { id } = useParams();

  const url = `https://assignment-12-server-h.herokuapp.com/products/${id}`;

  const { data: p, isLoading } = useQuery("p", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading />;
  }

  // oder handleSubmit
  const onSubmit = async (data) => {
    const order = {
      email: data.email,
      name: data.name,
      phoneNumber: data.phoneNumber,
      product: data.product,
      quantity: parseInt(data.quantity),
    };
    // console.log(order.quantity);
    if (order.quantity < parseInt(p.miniumQuantity)) {
      toast.error("You cannot order more than the available quantity");
    }

    if (order.quantity >= parseInt(p.miniumQuantity)) {
      // oder place
      fetch("https://assignment-12-server-h.herokuapp.com/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          toast.success("thank for your order");
        });
    } else {
      toast.error("You have to order more then minium order Quantity");
    }
  };
  return (
    <section className="max-w-7xl mx-auto  py-20">
      <div className="py-4">
        <h5 className="text-2xl font-bold text-accent uppercase">
          Product details
        </h5>
        <div className="divider bg-primary h-1 w-28 mx-auto"></div>
      </div>
      <div className="py-4 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1 lg:col-span-2 card bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 p-5 items-center">
              <div className="mx-auto">
                <img
                  src={p.image}
                  className="p-8 rounded-t-lg w-2/3 md:w-full"
                  alt=""
                />
              </div>

              <div className="px-5 pb-5">
                <h5 className="text-2xl py-4 text-left font-semibold tracking-tight text-gray-900 dark:text-white ">
                  {p.name}
                </h5>
                <p className="text-left text-secondary">
                  <small>{p.description}</small>
                </p>

                <div className="flex items-center mt-2.5 mb-5">
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    5.0
                  </span>
                  <span className="bg-blue-100 py-3 text-blue-800 text-xs font-semibold mr-2 px-2.5  rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    Available{p.availableQuantity}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    <small>${p.price}</small>
                  </span>

                  <span className="bg-blue-100 py-3 text-neutral text-xs font-semibold mr-2 px-2.5  rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    Minium {p.miniumQuantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 card-body shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <h2 className="text-3xl font-bold text-accent py-4">
                  Order Now
                </h2>

                <input
                  type="name"
                  readOnly
                  defaultValue={user.displayName}
                  className="input input-bordered text-secondary"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="email"
                  readOnly
                  defaultValue={user.email}
                  className="input input-bordered text-secondary"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email address is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "enter a valid email address",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
                <label className="label">
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered text-secondary"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "phoneNumber is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.phoneNumber?.type === "required" && (
                    <span className="text-red-500">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="text"
                  className="input input-bordered text-secondary"
                  defaultValue={p?.name}
                  readOnly
                  {...register("product", {
                    /* required: {
                      value: true,
                      message: "name is required",
                    }, */
                  })}
                />
                {/* <label className="label">
                  {errors.p?.type === "required" && (
                    <span className="text-red-500">
                      {errors.p.message}
                    </span>
                  )}
                </label> */}
              </div>

              <div className="form-control pt-4">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered text-secondary"
                  {...register("quantity", {
                    /* required: {
                      value: true,
                      message: "Quantity is required",
                    }, */
                  })}
                />
                {/* <label className="label">
                  {errors?.quantity?.type === "required" && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </label> */}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary"
                  value="Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
