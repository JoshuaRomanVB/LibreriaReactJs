import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/MiCuenta.scss';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MiCuenta = () => {
  const { state } = useContext(AppContext);

  // Recuperar la información del usuario guardada en Local Storage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-3 mb-4">
          <h2 className="text-center">Mi cuenta</h2>
          <hr className="mb-4" />
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
              Información del usuario
            </a>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Información del usuario</h5>
              <hr className="mb-4" />
              <div className="form-group">
                <label htmlFor="name" className="font-weight-bold">Nombre:</label>
                <p className="form-control-static">{userInfo.name}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="font-weight-bold">Correo electrónico:</label>
                <p className="form-control-static">{userInfo.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold">Contraseña:</label>
                <p className="form-control-static">**********</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
