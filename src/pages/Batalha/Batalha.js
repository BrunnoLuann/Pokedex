import React, { useState } from 'react'
import Header from '../../Components/Header'
import { useGlobalContext } from '../../global/GlobalContext'
import { useHistory } from 'react-router';
import { goToHomePage, goToPokedexPage } from '../../routes/coordinator'
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { FullPage, ContainerCard, ContainerCardPoke, ImagemContainer, Img, Cont, DivLado, ContUm, ContDo, ContTre, ButtonContainer, PokeBattleContainer, BattleButton } from "./BatalhaStyled";
import Swal from 'sweetalert2'

function Batalha() {

  const history = useHistory();

  const [arrayPokeBattle, setArrayPokeBattle] = useState([]);

  const { states } = useGlobalContext();

  const sendToBattle = (poke) => {
    const newArrayPokemon = [...arrayPokeBattle.splice(0, 0), poke, ...arrayPokeBattle.splice(0, 1)];
    setArrayPokeBattle(newArrayPokemon);
  };

  const pokemonBattle = () => {
    if (arrayPokeBattle[0] != null && arrayPokeBattle[1] != null) {
      const firstPoke = arrayPokeBattle[0];
      const secondPoke = arrayPokeBattle[1];
      let firstPokeStatus = 0;
      let secondPokeStatus = 0;
      for (let x = 0; x < 6; x++) {
        firstPokeStatus = firstPokeStatus + firstPoke.stats[x].base_stat;
        secondPokeStatus = secondPokeStatus + secondPoke.stats[x].base_stat;
      };
      if (firstPokeStatus > secondPokeStatus) {
        Swal.fire(`${firstPoke.name} venceu ${secondPoke.name} na batalha de Pokémons!`);
      }
      else if (secondPokeStatus > firstPokeStatus) {
        Swal.fire(`${secondPoke.name} venceu ${firstPoke.name} na batalha de Pokémons!`);
      }
      else if (secondPokeStatus === firstPokeStatus || firstPokeStatus === secondPokeStatus) {
        Swal.fire(`${secondPoke.name} empatou com ${firstPoke.name} na batalha de Pokémons!`);
      }
      setArrayPokeBattle([]);
    }
    else {
      Swal.fire("Selecione dois Pokémons para iniciar uma batalha!");

    };
  };

  return (
    <FullPage>
      <Header
        titlePage='BATALHA'
        leftButton='VOLTAR PARA HOME'
        leftIcon={<HomeIcon />}
        rightButton='POKÉDEX'
        rightIcon={<FormatListBulletedIcon />}
        onClickLeftButton={() => goToHomePage(history)}
        onClickRightButton={() => goToPokedexPage(history)}
      ></Header>
      <Cont>
        <ContainerCard>
          {states.pokedex.map((poke) => {
            return (
              <ContainerCardPoke key={poke.name} onClick={() => sendToBattle(poke)} >
                <ImagemContainer>
                  <Img src={poke.sprites.front_default} />
                </ImagemContainer>
              </ContainerCardPoke>
            )
          })}
        </ContainerCard>
        <DivLado>
          <PokeBattleContainer>
            {arrayPokeBattle.map((poke) => {
              return (
                <ContUm key={poke.name} onClick={() => sendToBattle(poke)} >
                  <ContDo>
                    <ContTre src={poke.sprites.other.home.front_default} />
                  </ContDo>
                </ContUm>
              )
            })}
          </PokeBattleContainer>
          <ButtonContainer>
            <BattleButton onClick={pokemonBattle}>BATALHAR!</BattleButton>
          </ButtonContainer>
        </DivLado>
      </Cont>
    </FullPage>
  )
}

export default Batalha;