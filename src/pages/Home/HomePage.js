import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import PokemonCard from '../../Components/PokemonCards'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToPokedexPage, goToPokemonDetailsPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constantes/urls'
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination'
import { useGlobalContext } from '../../global/GlobalContext'
import LinearProgress from '@material-ui/core/LinearProgress';
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import { PaginaCompleta, CardHome, Paginacao } from './HomeStyled'
import Swal from 'sweetalert2'


function HomePage() {

  const [pokeNomes, setPokeNomes] = useState([])
  const [pokemons, setPokemons] = useState([])
  const { states, setters } = useGlobalContext()
  const history = useHistory()
  const [numeroPagina, setNumeroPagina] = useState(1)
  const [loading, setLoading] = useState(false)


  const onChangePagina = (event, value) => {
    setNumeroPagina(value)
  }

  useEffect(() => {
    setLoading(true)
    getPokeNomes()
  }, [numeroPagina])

  useEffect(() => {
    const novoArray = []
    pokeNomes.forEach((poke) => {
      axios
        .get(`${BASE_URL}/pokemon/${poke.name}`)
        .then((response) => {
          novoArray.push(response.data)
          if (novoArray.length === 20) {
            const orderedList = novoArray.sort((a, b) => {
              return a.id - b.id
            })
            setPokemons(orderedList)
            setLoading(false)
          }
        })
        .catch((error) => console.log(error.message))
    })
  }, [pokeNomes])

  const getPokeNomes = () => {

    const offset = (numeroPagina - 1) * 20;
    axios
      .get(`${BASE_URL}/pokemon/?limit=20&offset=${offset}`)
      .then((response) => {
        setPokeNomes(response.data.results)
        setLoading(false)

      })


  };
  const pegaPokemonOnClick = (poke) => {

    const newArrayPokemon = [...states.pokedex, poke]
    setters.setPokedex(newArrayPokemon)
    Swal.fire('Pokemon adicionado com sucesso!');

  };

  const filtered = pokemons.filter((poke) => {
    const estaNaPokedex = states.pokedex.find((mons) => {
      if (poke.id === mons.id) {
        return true
      } else {
        return false
      }
    })
    if (estaNaPokedex) {
      return false
    } else {
      return true
    }

  })


  return (


    <PaginaCompleta>


      <Header
        titlePage='POKEMONS'
        leftButton='HOME'
        leftIcon={<HomeIcon />}
        rightButton='POKÉDEX'
        rightIcon={<FormatListBulletedIcon />}
        onClickLeftButton={() => goToHomePage(history)}
        onClickRightButton={() => goToPokedexPage(history)}
      />
      {loading ? <p>CARREGANDO...<LinearProgress size={40} thickness={10} variant="determinate" /></p> :
        <CardHome>
          {filtered.map((value) => {
            return (
              <PokemonCard
                key={value.id}
                PokeName={value.name}
                PokePhoto={value.sprites.other.home.front_default}
                UpButton='ADICIONAR'
                OnUp={() => pegaPokemonOnClick(value)}
                IconUp={<AddCircleIcon />}
                DowButton='DETALHES'
                OnDow={() => goToPokemonDetailsPage(history, value.name)}
                IconDow={<InfoIcon />}
              />)
          })}
        </CardHome>}


      <Paginacao>
        <Pagination count={56} color="primary" onChange={onChangePagina} />
      </Paginacao>

    </PaginaCompleta>
  );
}

export default HomePage;

