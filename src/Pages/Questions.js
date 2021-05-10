import React, { useContext } from 'react';
import data from '../data';
import * as S from './Styled/S.Questions';
import { MyContext } from '../context/MyContext';
import { Redirect } from 'react-router';

function Questions() {
  const { ask, setAsk, score, setScore } = useContext(MyContext);
  const { question, options } = data[ask];

  const nextQuestion = ({ target }) => {
    setAsk(ask + 1);
    setScore(score + Number(target.value));
  } 

  return (
    <S.Div>
      <S.DivText>
        <S.H3>Pergunta {ask + 1}:</S.H3>
        <S.P>{ question }</S.P>
      </S.DivText>
      <S.Section>
        {
          options.map((ask, index) => (
            <S.ButtonAsk
              key={ index }
              type="button"
              value={ ask.option[1] }
              onClick={ (event) => nextQuestion(event) }
            >
              { ask.option[0] }
            </S.ButtonAsk>
          ))
        }
      </S.Section>
      { ask > 9 && <Redirect to="/resultado" /> }
    </S.Div>
  );
}

export default Questions;
