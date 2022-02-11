
import '../StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToHomePage, goToPokemonDetailsPage, goToBattlePage } from '../../routes/coordinator';
import { useGlobalContext } from '../../global/GlobalContext'
import PokemonCard from '../../Components/PokemonCards'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import DeleteIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import Header from '../../Components/Header'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { PaginaCompleta, CardPokemon } from './PokedexStyled';



function PokedexPage() {

  const { states, setters } = useGlobalContext()

  const history = useHistory();

  const excluirDaPokedex = (pok) => {
    const arrayExcluir = states.pokedex.filter((poke) => {
      if (poke.name === pok) {
        return false;
      } else {
        return true;
      }
    })
    setters.setPokedex(arrayExcluir)
  }


  return (
    <PaginaCompleta>
      <>
        <Header
          titlePage='POKEDEX'
          leftButton='VOLTAR PARA HOME'
          leftIcon={<KeyboardReturnIcon />}
          rightButton='BATALHAR'
          rightIcon={<CompareArrowsIcon />}
          onClickLeftButton={() => goToHomePage(history)}
          onClickRightButton={() => goToBattlePage(history)}
        ></Header>

        <CardPokemon>
          {states.pokedex.map((poke) => {
            return <PokemonCard
              key={poke.id}
              PokeName={poke.name}
              PokePhoto={poke.sprites.other.home.front_default}
              UpButton='EXCLUIR'
              OnUp={() => excluirDaPokedex(poke.name)}
              IconUp={<DeleteIcon />}
              DowButton='DETALHES'
              OnDow={() => goToPokemonDetailsPage(history, poke.name)}
              IconDow={<InfoIcon />}
            />

          })}
        </CardPokemon>


      </>
    </PaginaCompleta>
  );
}

export default PokedexPage;
