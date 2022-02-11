import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { BASE_URL } from '../../constantes/urls';
import { goToHomePage, goToPokedexPage } from '../../routes/coordinator';
import { pokeTypes, pokeTypePT } from '../../constantes/pokemonTypes';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import escudo from '../../img/escudo.png';
import escudoo from '../../img/escudoo.png';
import botas from '../../img/botas.png';
import espadas from '../../img/espadas.png';
import coracao from '../../img/coracao.png';
import espadas1 from '../../img/espadas1.png';
import { PageCompleta, InformaContainer, ImagemCard, DetalhesContainer, PokeContainer, PokemonInforma, ForcaContainer, TipoContainer, PokeType, PokeImageContainer, HabilidadesContainer, PokemonHabilidades, Habilidades, HabilidadesIcones, PokemonNome, MovimentoEspecial, pokeTypes } from './DetailsStyled';
import Swal from 'sweetalert2'



function PokemonDetailsPage() {

    const history = useHistory();
    const params = useParams();

    const [pokeDetails, setPokeDetails] = useState()

    const getPokemonDetails = () => {
        axios.get(`${BASE_URL}/pokemon/${params.name}`)
            .then((response) => {
                setPokeDetails(response.data);

            })
            .catch((error) => {
                console.log(error.response);
                Swal.fire("Tente novamente.")
            })
    };

    useEffect(() => {
        getPokemonDetails();
    }, []);

    return (
        <PageCompleta>
            <Header
                leftButton='HOME'
                rightButton='POKÉDEX'
                onClickLeftButton={() => goToHomePage(history)}
                onClickRightButton={() => goToPokedexPage(history)}
            />
            {pokeDetails ? (
                <InformaContainer>
                    <DetalhesContainer>
                        <PokeContainer>
                            <PokemonNome>{pokeDetails.name}</PokemonNome>
                        </PokeContainer>
                        <ForcaContainer>
                            <PokemonInforma>PODERES</PokemonInforma>
                            <TipoContainer>
                                {pokeDetails.types.map((poke) => {
                                    return (
                                        <PokeType
                                            key={poke.type.name}
                                            type={poke.type.name}>
                                            {pokeTypePT(poke.type.name)}
                                        </PokeType>)
                                })}
                            </TipoContainer>
                        </ForcaContainer>
                        <PokeImageContainer>
                            <ImagemCard src={pokeDetails.sprites.other.home.front_default} alt={`${pokeDetails.name} front default`} />
                            <ImagemCard src={pokeDetails.sprites.other.home.front_shiny} alt={`${pokeDetails.name} back shiny`} />
                        </PokeImageContainer>
                        <HabilidadesContainer>
                            <PokemonInforma>HABILIDADES</PokemonInforma>
                            <PokemonHabilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={coracao} />
                                    Saúde: {pokeDetails.stats[0].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={espadas1} />
                                    Ataque: {pokeDetails.stats[1].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={escudo} />
                                    Defesa: {pokeDetails.stats[2].base_stat}
                                </Habilidades>
                            </PokemonHabilidades>
                            <PokemonHabilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={espadas} />
                                    Ataque especial: {pokeDetails.stats[3].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={escudoo} />
                                    Defesa especial: {pokeDetails.stats[4].base_stat}
                                </Habilidades>
                                <Habilidades>
                                    <HabilidadesIcones src={botas} />
                                    Velocidade: {pokeDetails.stats[5].base_stat}
                                </Habilidades>
                            </PokemonHabilidades>
                        </HabilidadesContainer>
                        <MovimentoEspecial>
                            <PokemonInforma>PODERES PRINCIPAIS</PokemonInforma>
                            {pokeDetails.moves.slice(0, 5).map((poke) => {
                                return <p key={poke.move.name}>{poke.move.name}</p>
                            })}
                        </MovimentoEspecial>
                    </DetalhesContainer>
                </InformaContainer>)
                : <div></div>
            }
        </PageCompleta>
    );
}

export default PokemonDetailsPage;