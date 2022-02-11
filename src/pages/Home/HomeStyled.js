import styled from "styled-components";
import fundo from '../../img/fundo.jpg'


export const PaginaCompleta = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial;
  color: blue;
`

export const CardHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  column-gap: 35px;
  margin: 10px 10px 10px 0px;
  background-image:url(${fundo});


  @media(max-width: 1075px) {
    grid-template-columns: 1fr 1fr 1fr ;
    margin: 10px 20px 20px 0px;
    column-gap: 20px;
  };

  @media(max-width: 975px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px 20px 20px 0px;
    column-gap: 15px;
  };

  @media(max-width: 775px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px 40px 20px 0px;
    column-gap: 10px;
  };

  @media(max-width: 575px) {
    grid-template-columns: 1fr 1fr;
    margin: 10px 20px 20px 0px;
    column-gap: 25px;
  };


`

export const Paginacao = styled.div`

`
export default styled;