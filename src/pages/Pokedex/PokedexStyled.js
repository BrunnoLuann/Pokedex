import styled from "styled-components"
import fundo from '../../img/fundo.jpg'

export const PaginaCompleta = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image:url(${fundo});
  
`

export const CardPokemon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  column-gap: 35px;
  margin: 10px 10px 10px 0px;
  @media(max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  };
`
export default styled;