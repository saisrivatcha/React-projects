import React, { useState } from "react";
import { useContext } from "react";
import { loginContextObj } from "./LoginContext";
import { useForm } from "react-hook-form";
import { MdOutlineSaveAlt } from "react-icons/md";

function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(loginContextObj);
  const [userEditStatus, setUserEditStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  function onUserProfileEdit() {
    setUserEditStatus(true);
    setValue("username", currentUser.username);
    setValue("email", currentUser.email);
    setValue("dob", currentUser.dob);
  }

  function onModifiedUserSave(modifiedUser) {
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(modifiedUser),
    })
      .then((res) => res.json())
      .then((editedUser) => {
        setCurrentUser(editedUser);
        setUserEditStatus(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="text-center">
      {userEditStatus === false ? (
        <div className="bg-light rounded p-5">
          <p className="text-info fs-3">{currentUser.username}</p>
          <p className="text-info fs-3">{currentUser.email}</p>
          <button className="btn btn-success" onClick={onUserProfileEdit}>
            Edit Profile
          </button>
        </div>
      ) : (
        <form
          action=""
          className="w-50 mx-auto mt-5"
          onSubmit={handleSubmit(onModifiedUserSave)}
        >
          <input
            type="text"
            {...register("username")}
            name=""
            id="us"
            className="form-control mb-3"
          />
          <input
            type="email"
            {...register("email")}
            name=""
            id="ps"
            className="form-control mb-3"
          />
          {/* <input type="date" {...register('dob')} name="" id="em" className="form-control mb-3" /> */}
          <button className="btn btn-info" type="submit">
            <MdOutlineSaveAlt />
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default UserProfile;
