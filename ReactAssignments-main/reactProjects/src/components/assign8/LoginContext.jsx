import { createContext, useState } from "react";

export const loginContextObj = createContext();

function LoginContext({ children }) {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginErr, setLoginErr] = useState(null);

  function handleUserLogin({ username, password }) {
    fetch(
      `http://localhost:3000/users?username=${username}&password=${password}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((userList) => {
        if (userList.length !== 0) {
          setUserLoginStatus(true),
            setCurrentUser(userList[0]),
            setLoginErr(null);
        } else {
          setLoginErr({ message: "Invalid Username or Password" });
        }
      })
      .catch((err) => setLoginErr(err));
  }

  function userLogout() {
    setUserLoginStatus(false);
    setCurrentUser(null);
    setLoginErr(null);
  }
  return (
    <loginContextObj.Provider
      value={{
        handleUserLogin,
        userLoginStatus,
        currentUser,
        setCurrentUser,
        loginErr,
        userLogout,
      }}
    >
      {children}
    </loginContextObj.Provider>
  );
}

export default LoginContext;
