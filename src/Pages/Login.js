import React, { useContext, useEffect } from 'react';
import * as S from './Styled/S.Login';
import Logo from '../images/Logo.png'
import { Redirect } from 'react-router';
import { MyContext } from '../context/MyContext';
import validateLogin from '../services/loginValidation';

function Login() {
  const { user, setUser, validate, setValidate, redirect, setRedirect } = useContext(MyContext);
  
  const validation = async () => {
    const verify = await validateLogin.isValid(user);
    setValidate(verify);
  }

  useEffect(() => {
    validation();
  })
  return (
    <S.Div>
      <S.Img
        src={ Logo }
        alt="logo do aplicativo"
      />
      <S.Section>
        <S.H3>Login</S.H3>
        <S.Input
          type="text"
          id="email"
          placeholder="Nome"
          onChange={ ({ target }) => setUser({ ...user, email: target.value })}
        />
        <S.Input
          type="password"
          id="password"
          placeholder="Senha"
          onChange={ ({ target }) => setUser({ ...user, password: target.value })}
        />
      </S.Section>
      <S.ButtonLogin
        type="button"
        disabled={ !validate }
        onClick={ () => setRedirect(true) }
      >
        Entrar
      </S.ButtonLogin>
      { redirect && <Redirect to="/iniciar" /> }
    </S.Div>
  );
}

export default Login;
