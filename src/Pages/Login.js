import React, { useContext } from 'react';
import * as S from './Styled/S.Login';
import Logo from '../images/Logo.png'
import { Redirect } from 'react-router';
import { MyContext } from '../context/MyContext';

function Login() {
  const { redirect, setRedirect } = useContext(MyContext);
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
        />
        <S.Input
          type="password"
          id="password"
          placeholder="Senha"
        />
      </S.Section>
      <S.ButtonLogin
        type="button"
        onClick={ () => setRedirect(true) }
      >
        Entrar
      </S.ButtonLogin>
      { redirect && <Redirect to="/iniciar" /> }
    </S.Div>
  );
}

export default Login;
