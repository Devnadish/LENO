import { createContext, useContext, useEffect, useState } from "react";
import Login from "../login/Login";
import InfoBar from "../login/InfoBar"




const UserContext = createContext({});


const initialUser =JSON.parse(localStorage.getItem("lenoUser"))
if (localStorage.getItem("lenoUser") === null || localStorage.getItem("lenoUser") === undefined) {
  localStorage.setItem("lenoUser",JSON.stringify({name:"",phone:"",login:false}))
}



const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [login, setIslogin] = useState(false);

  

  useEffect(() => {
    
    user?.name === '' && setIslogin(false)
    user?.name === null && setIslogin(false)
    user?.name === undefined && setIslogin(false)
    setIslogin(user.login)
    
  }, [user]);

  /* ------------------------------------------------------------------ */
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        setIslogin
      }}
    >
      {children}
      {login ? <InfoBar userName={user?.name} userPhone={user?.phone} setIslogin={setIslogin}/>: <Login />}
    {/* <Comments/> */}

    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
