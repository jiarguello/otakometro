import React, { useContext } from 'react';
import * as S from './Styled/Result';
import Chooper from '../images/Chooper.jpg';
import { MyContext } from '../context/MyContext';
import { Redirect } from 'react-router';

function Result() {
  const { redirect, score, setScore, setAsk, setRedirect } = useContext(MyContext);

  const message = (score) => {
    if (score < 6) {
      return (<S.P>
        Ufa! Seu teste deu negativo, você não é otaku. Tudo ficará bem se você não acessar por aqui a Planeta Otaku.
      </S.P>)
    } else if (score < 11) {
      return (<S.P>
        Parece que você já foi otaku um dia, mas nada grave. É só se manter longe desse link da Planeta Otaku.
      </S.P>)
    } else if (score < 20) {
      return (<S.P>
        Detectamos o vírus otaku, mas é algo leve! Fique longe desse link e tudo ficará bem...
      </S.P>)
    }
    return (<S.P>
      Isso é terrível! Parece que você não tem mais salvação! Como não podemos te salvar, que tal acessar por aqui a planeta Otaku?
    </S.P>)
  }

  const restart = () => {
    setScore(0);
    setAsk(0);
    setRedirect(null);
  }

  return (
    <S.Div>
      <S.Img
        src={ Chooper }
        alt="Chooper One Piece médico"
      />
      <S.DivResult>
        <S.H1>
          Sua pontuação foi <b>{score}</b>
        </S.H1>
        {
          message(score)
        }

      </S.DivResult>
      <S.ButtonShare
        type="button"
        onClick={ () => restart() }
      >
        Testar novamente
      </S.ButtonShare>
      {/* <S.ButtonShare
        type="button"
        // onClick=""
      >
        Compartilhar
      </S.ButtonShare> */}
      {
        redirect === null && <Redirect to="/" />
      }
    </S.Div>
  );
}

export default Result;
