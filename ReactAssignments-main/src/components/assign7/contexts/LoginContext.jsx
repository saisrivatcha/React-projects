import { Children, createContext } from "react";
export const loginContextObj = createContext();
import { useState } from "react";

function LoginContext({ children }) {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginErr, setLoginErr] = useState(null);
  //state(userLoginStatus,currentUser)
  function handleUserLogin({ username, password }) {
    //console.log(userCredObj)
    //http get req
    fetch(
      `http://localhost:3000/users?username=${username}&password=${password}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((usersList) => {
        if (usersList.length !== 0) {
          setUserLoginStatus(true);
          setCurrentUser(usersList[0]);
        } else {
          setLoginErr({ message: "Invalid username or password" });
        }
      })
      .catch((err) => setLoginErr(err));
  }

  return (
    <loginContextObj.Provider
      value={{ handleUserLogin, userLoginStatus, currentUser, loginErr }}
    >
      {children}
    </loginContextObj.Provider>
  );
}

export default LoginContext;
