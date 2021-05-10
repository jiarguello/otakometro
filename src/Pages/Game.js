import React, { useContext } from 'react';
import * as S from './Styled/S.Game';
import Otaku from '../images/Otaku-doente.jpg';
import { Redirect } from 'react-router';
import { MyContext } from '../context/MyContext';

function Game() {
  const { redirect, setRedirect } = useContext(MyContext);
  return (
    <S.Div>
      <S.Img
        src={ Otaku }
      />
      <S.Paragraph>
        Milhares de pessoas são otakus e não sabem, descubra agora se você já foi infectado com esse vírus!
      </S.Paragraph>
      <S.ButtonStart
        type="button"
        onClick={ () => setRedirect(false) }
      >
        Iniciar
      </S.ButtonStart>
      { !redirect && <Redirect to="/perguntas" /> } 
    </S.Div>
  );
}

export default Game;
