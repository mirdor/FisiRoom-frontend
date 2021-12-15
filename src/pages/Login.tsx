import { loginInputs } from 'common/constants';
import { LoginData, TokenUser } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
<<<<<<< Updated upstream
import { useNavigate } from 'react-router';
import axios from 'axios';
=======
import Wrapper from 'containers/Wrapper';
import { useState } from 'react';
import { Navigate } from 'react-router';
>>>>>>> Stashed changes

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: LoginData) => {
<<<<<<< Updated upstream
    axios
      .post<TokenUser>('http://localhost:8000/users/login/', data)
      .then((response) => {
        localStorage.setItem('user-token', response.data.token);
        console.log(response.data.token);
        navigate('/cursos');
      })
      .catch((e) => {
        console.error('Error: ', e);
=======
    try {
      const number = await fetch(`http://localhost:8000/users/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: 'sdadasdasdasd',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
>>>>>>> Stashed changes
      });
  };
  return (
    <Wrapper>
      <div className="py-4 w-100 d-flex flex-column justify-content-center align-items-center">
        <div
          style={{ maxWidth: '600px' }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <Header centered>Iniciar Sesión</Header>

          <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
            <Header variant="secondary" centered>
              Bienvenido a HoloSchool
            </Header>
            <div className="px-4">
              <Form
                inputs={loginInputs}
                callback={handleSubmit}
                btnLabel="Ingresar"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
