import styled from 'styled-components';
import img from '../../images/Background-questions.jpg'

export const Div = styled.div`
  align-items: center;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`
export const ButtonAsk = styled.button`
  background-color: rgb(5, 11, 58);
  border-color: black;
  border-radius: 0.5em;
  color: white;
  height: 20%;
  font-size: 120%;
  margin: 5px 0px;
  min-heigth: 45px;
  min-width: 250px;
  padding: 5px;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: rgb(134, 110, 6);
  }
`

export const H3 = styled.h3`
  text-align: center;
  background-color: white;
  font-size: 5vh;
  padding: 10px 10px;
  width: 90%;
`

export const P = styled.p`
  background-color: white;
  font-size: 130%;
  width: 90%;
`

export const DivText = styled.div`
  align-items: center;  
  height: 30vh;
  display: flex;
  border: 5px solid black;
  border-radius: 5%;
  background-color: white;
  flex-direction: column;
  width: 78%;
`

export const Section = styled.section`
  height: 50vh;
  heigth: 50%;
  width: 78%;
`
