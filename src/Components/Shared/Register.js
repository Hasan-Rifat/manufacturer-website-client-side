import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "./Loading";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorMessage;
  if (error || updateError) {
    errorMessage = (
      <span className="text-sm text-red-500">
        {error?.message} {updateError?.message}
      </span>
    );
  } else {
    errorMessage = "";
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // navigate(from, { replace: true });
  };
  const [token] = useToken(user || gUser);

  if (token) {
    navigate(from, { replace: true });
  }

  if (loading || updating) {
    return <Loading />;
  }

  // console.log(user?.user?.displayName);
  return (
    <div className="py-10 lg:py-36 max-w-7xl justify-center flex items-center mx-auto">
      <div className="card w-2/4 mx-auto  shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <h2 className="text-3xl font-bold text-accent">Register</h2>
              <label className="label">
                <span className="text-accent">Your Name</span>
              </label>
              <input
                type="name"
                placeholder="Enter your Name"
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
                  <span className="label-text-alt text-red-500">
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
            <div className="flex justify-between ">
              <div className="">
                <button className="text-secondary ">Forgot password?</button>
              </div>
              <div className="">
                <Link to="/login">
                  <span className="text-neutral">Have a account?</span>
                  <span className="text-secondary"> Login</span>
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>
          </form>
          {/* {signInError} */}
          {errorMessage}
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()}>Continue Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
