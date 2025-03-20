import React, { useContext, useEffect } from "react";
import { loginContextObj } from "./LoginContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleUserLogin, userLoginStatus, currentUser, loginErr } =
    useContext(loginContextObj);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoginStatus === true && currentUser !== null) {
      navigate(`/user-profile/`);
    }
  }, [userLoginStatus, currentUser, navigate]);
  return (
    <div>
      <h3 className="text-center">User Login</h3>
      <form
        action=""
        className="mt-5 mx-auto w-50"
        onSubmit={handleSubmit(handleUserLogin)}
      >
        {loginErr !== null && (
          <p className="text-warning text-center fs-2">{loginErr.message}</p>
        )}
        <div className="mb-3">
          <label className="form-label" htmlFor="us">
            Username
          </label>
          <input
            type="text"
            id="us"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="ps">
            Password
          </label>
          <input
            type="password"
            id="ps"
            className="form-control"
            {...register("password")}
          />
        </div>
        <button className="btn btn-outline-info d-block mx-auto" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
