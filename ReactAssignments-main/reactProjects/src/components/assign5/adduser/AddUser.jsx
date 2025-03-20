import UserList from "./UserList";
import { useState } from "react";
import { useForm } from "react-hook-form";
function AddUser() {
  //state
  let [user, setUser] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function handleFormSubmit(obj) {
    setUser([...user, obj]);
    reset();
  }

  return (
    <div className="container mt-5 w-50">
      <h2 className="display-6 text-dark bg-warning text-center fw-semibold">
        User Registration
      </h2>
      <form className="mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label fs-5">
            Username
          </label>
          <input
            type="text"
            {...register("username", {
              required: true,
              minLength: 4,
              maxLength: 8,
            })}
            id="username"
            className="form-control"
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-danger">*Min length is 4 characters</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p className="text-danger">*Max length is 8 characters</p>
          )}
        </div>
        {/* dob */}
        <div className="mb-3">
          <label htmlFor="birth" className="form-label fs-5">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("birth", { required: true })}
            id="birth"
            className="form-control"
          />
          {errors.birth?.type === "required" && (
            <p className="text-danger">*dob is required</p>
          )}
        </div>
        {/* city */}
        <div className="mb-3">
          <label htmlFor="city" className="form-label fs-5">
            City
          </label>
          <input
            type="text"
            {...register("city", { required: true })}
            id="city"
            className="form-control"
          />
          {errors.city?.type === "required" && (
            <p className="text-danger">*city is required</p>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-info">
            Add User
          </button>
        </div>
      </form>
      <UserList user={user} />
    </div>
  );
}

export default AddUser;
