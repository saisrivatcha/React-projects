import { useForm } from "react-hook-form";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  function handleFormSubmit(userObj) {
    console.log(userObj);
  }

  return (
    <div className="container">
      <h2>Assignment-4</h2>
      <h1 className="display-4 text-secondary">Registration Form</h1>

      <form
        className="mt-4 p-4 bg-light shadow-sm rounded"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="fn" className="form-label">First Name</label>
          <input
            type="text"
            {...register("firstname", { required: true, minLength: 4, maxLength: 12 })}
            id="fn"
            className="form-control"
          />
          {errors.firstname && <p className="text-danger">* First name is required (4-12 characters)</p>}
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="ln" className="form-label">Last Name</label>
          <input
            type="text"
            {...register("lastname", { required: true, minLength: 4, maxLength: 12 })}
            id="ln"
            className="form-control"
          />
          {errors.lastname && <p className="text-danger">* Last name is required (4-12 characters)</p>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            id="email"
            className="form-control"
          />
          {errors.email && <p className="text-danger">* Please enter a valid email</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">DOB</label>
          <input type="date" {...register("dob", { required: true })} id="dob" className="form-control" />
          {errors.dob && <p className="text-danger">* Date of birth is required</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            {...register("phonenumber", { required: true, pattern: /^[0-9]{10}$/ })}
            id="phone"
            className="form-control"
          />
          {errors.phonenumber && <p className="text-danger">* Enter a valid 10-digit phone number</p>}
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              value="Male"
              {...register("gender", { required: true })}
              id="gender_male"
            />
            <label className="form-check-label" htmlFor="gender_male">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              value="Female"
              {...register("gender", { required: true })}
              id="gender_female"
            />
            <label className="form-check-label" htmlFor="gender_female">Female</label>
          </div>
          {errors.gender && <p className="text-danger">* Gender is required</p>}
        </div>

        {/* Subject */}
        <div className="mb-3">
          <label htmlFor="sub" className="form-label">Subject</label>
          <select {...register("subject", { required: true })} id="sub" className="form-control">
            <option value="">Select a subject</option>
            <option value="Maths">Math</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
          {errors.subject && <p className="text-danger">* Subject selection is required</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-3">Submit</button>

      </form>
    </div>
  );
}

export default Form1;
