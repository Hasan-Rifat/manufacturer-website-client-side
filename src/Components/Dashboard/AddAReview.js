import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const review = {
      name: data.name,
      review: data.review,
    };
    console.log(review);
    fetch("https://assignment-12-server-h.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("thank for your order");
      });
  };
  return (
    <section className="w-full mt-4">
      <div className="max-w-7xl mx-auto px-4 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <h2 className="text-3xl font-bold text-accent py-4">
              Add A Review
            </h2>

            <input
              type="name"
              placeholder="Your name"
              className="input input-bordered text-secondary w-4/5 mx-auto"
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
            <textarea
              type="text"
              placeholder="Write a Review"
              className="input input-bordered text-secondary w-4/5 mx-auto h-24"
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="text-red-500">{errors.review.message}</span>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn border-none w-1/4 mx-auto hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary"
              value="Add a Review"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAReview;
