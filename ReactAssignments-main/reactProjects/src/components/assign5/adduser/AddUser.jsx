import UserList from "./UserList";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddUser() {
  // State for users list and success message
  const [users, setUsers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  // Handle Form Submission
  const handleFormSubmit = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]); // Update user list
    setSuccessMessage("User added successfully! ✅"); // Show success message
    setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
    reset(); // Reset form fields
  };

  return (
    <div className="container mt-5">
      <h2 className="display-6 text-dark bg-warning text-center fw-semibold">
        User Registration
      </h2>

      {/* Success Message */}
      {successMessage && <p className="alert alert-success text-center">{successMessage}</p>}

      {/* Form */}
      <form className="mx-auto mt-4 p-4 border rounded bg-light shadow-sm" onSubmit={handleSubmit(handleFormSubmit)}>
        
        {/* Username Field */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label fs-5">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required", minLength: { value: 4, message: "Min length is 4 characters" }, maxLength: { value: 8, message: "Max length is 8 characters" } })}
            id="username"
            className="form-control"
            autoFocus
          />
          {errors.username && <p className="text-danger">{errors.username.message}</p>}
        </div>

        {/* Date of Birth Field */}
        <div className="mb-3">
          <label htmlFor="birth" className="form-label fs-5">Date of Birth</label>
          <input
            type="date"
            {...register("birth", { required: "Date of Birth is required" })}
            id="birth"
            className="form-control"
          />
          {errors.birth && <p className="text-danger">{errors.birth.message}</p>}
        </div>

        {/* City Field */}
        <div className="mb-3">
          <label htmlFor="city" className="form-label fs-5">City</label>
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            id="city"
            className="form-control"
          />
          {errors.city && <p className="text-danger">{errors.city.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-info" disabled={!isValid}>
            Add User
          </button>
        </div>
      </form>

      {/* User List Component */}
      <UserList users={users} />
    </div>
  );
}

export default AddUser;
