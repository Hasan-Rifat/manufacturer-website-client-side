import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "./Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (loading || gLoading) {
    return <Loading />;
  }

  if (token) {
    navigate(from, { replace: true });
  }
  let errorMessage;

  if (error || gError) {
    errorMessage = (
      <span className="text-sm text-red-500">
        {error?.message} {gError?.message}
      </span>
    );
  } else {
    errorMessage = "";
  }
  // console.log(user?.user?.displayName);
  return (
    <div className="py-10 lg:py-36 max-w-7xl justify-center flex items-center mx-auto">
      <div className="card w-2/4 mx-auto  shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <h2 className="text-3xl font-bold text-accent">login</h2>
              <label className="label">
                <span className="text-accent">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
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
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
              <label className="label">
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-accent">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered text-secondary"
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
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="label">
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="pt-5">{errorMessage}</div>
          </form>
          <div className="flex justify-center py-2 ">
            <div className="">
              <Link to="/register">
                <span className="text-neutral">Create a new account?</span>
                <span className="text-secondary"> Register</span>
              </Link>
            </div>
          </div>

          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()}>Continue Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
