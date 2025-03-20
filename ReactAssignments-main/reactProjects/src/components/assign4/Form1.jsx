import { useForm } from "react-hook-form";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Form1() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleFormSubmit(userData) {
    console.log("Submitted Data:", userData);
    alert("Form submitted successfully!");
    reset(); // Reset form after submission
  }

  return (
    <div className="container">
      <h2 className="text-center my-3">Assignment-4</h2>
      <h1 className="display-5 text-secondary text-center">Registration Form</h1>

      <form
        className="mt-4 p-4 bg-light shadow rounded"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", { required: "First name is required (4-12 chars)", minLength: 4, maxLength: 12 })}
            className="form-control"
          />
          {errors.firstname && <p className="text-danger">{errors.firstname.message}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", { required: "Last name is required (4-12 chars)", minLength: 4, maxLength: 12 })}
            className="form-control"
          />
          {errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Valid email is required",
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format" },
            })}
            className="form-control"
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", { required: "Date of birth is required" })}
            className="form-control"
          />
          {errors.dob && <p className="text-danger">{errors.dob.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            {...register("phonenumber", {
              required: "Phone number is required",
              pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
            })}
            className="form-control"
          />
          {errors.phonenumber && <p className="text-danger">{errors.phonenumber.message}</p>}
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              value="Male"
              {...register("gender", { required: "Gender selection is required" })}
              id="gender_male"
            />
            <label className="form-check-label" htmlFor="gender_male">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              value="Female"
              {...register("gender", { required: "Gender selection is required" })}
              id="gender_female"
            />
            <label className="form-check-label" htmlFor="gender_female">Female</label>
          </div>
          {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
        </div>

        {/* Subject */}
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <select {...register("subject", { required: "Subject selection is required" })} id="subject" className="form-control">
            <option value="">Select a subject</option>
            <option value="Maths">Math</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
          {errors.subject && <p className="text-danger">{errors.subject.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form1;
