import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useEstadoInicial from '../hooks/useEstadoInicial';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = '735994510357-bbediuj5gidbadqngan2ke7f0v04h12g.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

const getGoogleUser = async (accessToken, setIsLoggedIn) => {
  try {
    const response = await axios.get('https://people.googleapis.com/v1/people/me?personFields=emailAddresses,names', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { names, emailAddresses, metadata } = response.data;
    const name = names && names.length > 0 ? names[0].displayName : '';
    const email = emailAddresses && emailAddresses.length > 0 ? emailAddresses[0].value : '';
    setIsLoggedIn(true);
   console.log(name)
    return { name, email};
  } catch (error) {
    console.error(error);
  }
};

const Callback = () => {
  const { setUsuario, setIsLoggedIn, state } = useEstadoInicial();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Hook useNavigate para la navegación

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      const response = await axios.post('https://oauth2.googleapis.com/token', {
        code: code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: `${window.location.origin}/oauth2callback`,
        grant_type: 'authorization_code'
      });
      const { access_token } = response.data;
      const user = await getGoogleUser(access_token, setIsLoggedIn);
      setUsuario(user);
      setIsLoading(false);
      localStorage.setItem('userInfo', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', true);
      navigate('/home'); // Se usa el hook navigate para redirigir al usuario al componente Home
    };

    fetchAccessToken();
  }, [navigate, setUsuario, setIsLoggedIn]);

  return (
    <div>
      <h1>Callback</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <p>{state.usuario ? state.usuario.name : 'Usuario desconocido'}</p>
      )}
    </div>
  );
};

export default Callback;
