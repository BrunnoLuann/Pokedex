import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const ContainerCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: whitesmoke;
position: relative;
border: 1px solid black;
border-radius: 25px;
font-family: roboto;
box-shadow: 3px 3px black, -1em 0 0.4em #093ba9;
border-style:outset;
@media(max-width: 1075px) {
    width: 30vw;
    height: 40vh;
  };

  @media(max-width: 575px) {
    width: 40vw;
    height: 30vh;
  };

  @media(max-width: 775px) {
    width: 40vw;
    height: 30vh;
  };

  @media (max-width: 375px) {
    width: 40vw;
    height: 30vh;
  };
`;

const ImagemContainer = styled.div`
  width: 17vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
    @media (max-width: 375px) {
        width: 27vw;
        height: 100vh;
        margin-bottom: 10px;
    }
`;

const ContainerBotoes = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0%;
    justify-content: space-between ;
    width: 85%;
    height: 10.2vh;
    margin-bottom: 0.5em;
    @media (max-width: 375px) {
        flex-direction: column;
        align-items: center;
        height: 12vh;
    };
`;


const Img = styled.img`
    height: 60%;
    align-items: center; 
    margin-bottom: 40px;
`;

const PokeName = styled.div`
  margin-top: 1em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
}
@media (max-width: 1118px) {
     
      margin: 10px 10px 0px 10px;
      font-size: 20px;
    
  }
`;

function PokemonCard(props) {

  return (

    <ContainerCard >
      <PokeName>{props.PokeName}</PokeName>
      <ImagemContainer>
        <Img src={props.PokePhoto}></Img>
      </ImagemContainer>

      <ContainerBotoes>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={props.IconUp}
          onClick={props.OnUp}
        >{props.UpButton}</Button>

        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={props.IconDow}
          onClick={props.OnDow}
        >{props.DowButton}</Button>
      </ContainerBotoes>
    </ContainerCard>
  );
};

export default PokemonCard;