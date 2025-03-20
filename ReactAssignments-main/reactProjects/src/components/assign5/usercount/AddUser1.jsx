import { useState } from "react";
import { useForm } from "react-hook-form";
import UserList1 from "./UserList1";
import UserCount1 from "./UserCount1";

function AddUser1() {
  let [user, setUser] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  let [dup, setDup] = useState("");
  function handleFormSubmit(obj) {
    if (user.some((user) => user.username === obj.username)) {
      setDup("Duplicate username");
    } else {
      setUser([...user, obj]);
      setDup("");
      reset();
    }
  }

  function handleDelete(username) {
    setUser(user.filter((user) => user.username !== username));
  }

  return (
    <div className="container mt-5 w-50">
      <h2 className="display-5 text-dark bg-warning text-center fw-semibold">
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
            {...register("username", { required: true })}
            id="username"
            className="form-control"
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Username is required</p>
          )}
          {dup && <p className="text-danger">{dup}</p>}
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fs-5">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            id="email"
            className="form-control"
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">*Email required</p>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-info">
            Add User
          </button>
        </div>
      </form>
      <UserList1 user={user} onDelete={handleDelete} />
      <UserCount1 count={user.length} />
    </div>
  );
}

export default AddUser1;
