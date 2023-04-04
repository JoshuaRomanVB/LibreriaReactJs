import React, { useState } from 'react'

const estadoInicial = {
  usuario: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const useEstadoInicial = () => {
  const [state, setState] = useState(estadoInicial);

  const setUsuario = (usuario) => {
    setState({
      ...state,
      usuario: usuario,
    });
  };

  const setIsLoggedIn = (loggedIn) => {
    setState({
      ...state,
      isLoggedIn: loggedIn,
    });
  };
  return {
    state,
    setUsuario,
    setIsLoggedIn
  };
};

export default useEstadoInicial;
