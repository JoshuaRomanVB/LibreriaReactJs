const LS_KEYS = {
    USER: "user",
    IS_LOGGED_IN: "isLoggedIn"
  };
  
  const saveUserToLocalStorage = (user) => {
    localStorage.setItem(LS_KEYS.USER, JSON.stringify(user));
  };
  
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem(LS_KEYS.USER);
    return user ? JSON.parse(user) : null;
  };
  
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem(LS_KEYS.USER);
  };
  
  const saveIsLoggedInToLocalStorage = (isLoggedIn) => {
    localStorage.setItem(LS_KEYS.IS_LOGGED_IN, isLoggedIn);
  };
  
  const getIsLoggedInFromLocalStorage = () => {
    return localStorage.getItem(LS_KEYS.IS_LOGGED_IN) === "true";
  };
  
  const removeIsLoggedInFromLocalStorage = () => {
    localStorage.removeItem(LS_KEYS.IS_LOGGED_IN);
  };
  
  export {
    saveUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
    saveIsLoggedInToLocalStorage,
    getIsLoggedInFromLocalStorage,
    removeIsLoggedInFromLocalStorage,
    LS_KEYS,
  };
  