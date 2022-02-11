import styled from "styled-components";
import { pokeTypes, pokeTypePT } from '../../constantes/pokemonTypes';

export const PageCompleta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial;
    width: 100vw;
    height: 100vh;
`;

export const InformaContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: start;
    background-color: rgb(240, 238, 238);
    @media (max-width: 375px) {
        background-color: white;
        align-items: normal;
        justify-content: center;
    };
    @media (min-width: 720px) {
        height: 100%;
    };
`;

export const PokeType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    text-transform: uppercase;
    ${pokeTypes};
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

export const ImagemCard = styled.img`
    height: auto;
    width: 160px;
    @media (max-width: 375px) {
        flex-direction: column;
        width: 140px;
    };
`;

export const DetalhesContainer = styled.div`
    align-self: center;
    width: 39%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    padding: 56px;
    border-radius: 25px;
    @media (max-width: 375px) {
        width: 70%;
        align-items: center;
        justify-content: start;
        padding: 0;
        margin-top: 15px;
    };
    @media (min-width: 720px) {
        margin-top: 15px;
    };
`;

export const PokeContainer = styled.div`
    margin-bottom: 32px;
    text-transform: uppercase;
    @media (max-width: 375px) {
        margin-top: 1em;
        margin-bottom: 0.5em;
    };
`;

export const PokemonInforma = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    @media (max-width: 375px) {
        margin-bottom: 0px;
        font-size: 16px;
        margin: 0.8em 0;
    };
`;
export const ForcaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;
export const TipoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1em;
    width: 60%;
    @media (max-width: 375px) {
        margin-top: 0.2em;
        margin-bottom: 0px;
        font-size: 13px;
        font-weight: bold;
    };
`;

export const PokeImageContainer = styled.div`
    display: flex;
`;

export const HabilidadesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1em;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

export const PokemonHabilidades = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
    @media (max-width: 375px) {
        margin-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
`;

export const Habilidades = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

export const HabilidadesIcones = styled.img`
    margin-right: 5px;
`;

export const PokemonNome = styled.div`
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 375px) {
        font-size: 22px;
    };
`;

export const MovimentoEspecial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default styled;