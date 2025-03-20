import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState(null);

  function handleUserLogin(obj) {
    console.log(obj);
  }

  return (
    <div>
      <h1 className="display-4 text-center mt-4">Signin</h1>
      {loginErr !== null && (
        <p className="text-danger text-center fs-4">{loginErr.message}</p>
      )}
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleUserLogin)}
      >
        {/* username */}
        <div>
          <label className="form-label" htmlFor="un">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="un"
            className="form-control"
          />
        </div>
        {/* password */}
        <div>
          <label className="form-label" htmlFor="pw">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="pw"
            className="form-control"
          />
        </div>
        {/* button */}
        <button className="mt-3 btn btn-info d-block mx-auto" type="submit">
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
