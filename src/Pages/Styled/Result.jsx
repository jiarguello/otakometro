import styled from 'styled-components';

export const Img = styled.img`
  min-width: 250px;
  max-width: 700px;
  max-height: 30vh;
  width: 78%;
`

export const Div = styled.div`
  align-items: center;
  background-color: rgb(5, 11, 58);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  text-align: center;
`

export const DivResult = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-evenly;
  max-height: 40vh;
  max-width: 700px;
  padding: 5px;
  width: 78%;
`

export const ButtonShare = styled.button`
  background-color: rgb(199, 44, 44);
  border-color: black;
  border-radius: 1em;
  color: white;
  font-size: 1.5em;
  height: 2.5em;
  min-heigth: 45px;
  min-width: 250px;
  max-width: 700px;
  width: 78%;

  &:hover {
    background-color: red;
  }
`

export const P = styled.p`
  background-color: white;
  border-color: black;
  font-size: 1.5em;
  text-align: justify;
  width: 90%;
`

export const H1 = styled.h1`
  background-color: white;
  border-color: black;
  font-size: 1.5em;
  text-align: center;
  width: 95%;
`
