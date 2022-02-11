import styled from 'styled-components'
import fundo from '../../img/fundo.jpg'


export const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  background-image:url(${fundo});
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-gap: 10px;
  margin: 20px 10px 10px 0px;
  width: 15%;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  background-image:url(${fundo});
  @media (max-width: 375px) {
    width: 40%;
  };
`;

export const ContainerCardPoke = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: rgb(240, 238, 238);
  Box-shadow: 10px 5px 5px black ;
  border-style:outset;
  width: 90%;
  background:yellow;
  padding: 30%;
  
`;

export const ImagemContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Img = styled.img`
  align-items: center; 
`;

export const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivLado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84vw;
  height: 90vh;
  @media (max-width: 375px) {
    justify-content: start;
  };
`;

export const ContUm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const ContDo = styled.div`
  background-color: rgb(240, 238, 238);
`;

export const ContTre = styled.img`
  width: 10vw;
    background:#7a007a;
  @media (max-width: 375px) {
    width: 30vw;
  
  };
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  Box-shadow: 10px 5px 5px black ;
  font_family:roobot;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
}

`;

export const PokeBattleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: space-evenly;
  };
`;

export const BattleButton = styled.button`
  width: 120px;
  height: 40px;
  &:hover {
    cursor: pointer;
    background-color:#006491 ;
}
`;

export default styled;