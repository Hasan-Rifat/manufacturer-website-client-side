import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="py-10 lg:py-36 max-w-7xl justify-center flex items-center mx-auto">
      <div class="card w-2/4 mx-auto  shadow-2xl bg-base-100">
        <div class="card-body">
          <form onClick={handleSubmit(onSubmit)}>
            <div class="form-control">
              <h2 class="text-3xl font-bold text-accent">Register</h2>
              <label class="label">
                <span class="text-accent">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                class="input input-bordered text-secondary"
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
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
              <label class="label">
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="text-accent">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered text-secondary"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is a required",
                  },
                  minLength: {
                    value: 6,
                    message: "enter a valid password",
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label class="label">
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex justify-between ">
              <div class="">
                <button class="text-secondary ">Forgot password?</button>
              </div>
              <div class="">
                <Link to="/login">
                  <span className="text-neutral">Have a account?</span>
                  <span class="text-secondary"> Login</span>
                </Link>
              </div>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>

          <div class="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
