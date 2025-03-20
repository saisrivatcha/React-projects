import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  function handleFormSubmit(newUser) {
    // console.log(newUser)
    //make http post req to save newUser in API
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/signin");
        }
      })
      .catch((err) => {
        setError(err);
      });
  }
  return (
    <div>
      <h1 className="display-4 text-center">Signup</h1>
      {/* form */}
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
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
        {/* email */}
        <div>
          <label className="form-label" htmlFor="em">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="em"
            className="form-control"
          />
        </div>
        {/* date of birth */}
        <div>
          <label className="form-label" htmlFor="db">
            Date of birth
          </label>
          <input
            type="date"
            {...register("dob")}
            id="db"
            className="form-control"
          />
        </div>
        {/* button */}
        <button className="mt-3 btn btn-info d-block mx-auto" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
