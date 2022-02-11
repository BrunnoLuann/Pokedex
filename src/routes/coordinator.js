export const goToHomePage = (history) =>{
    history.push('/');
};

export const goToPokemonDetailsPage = (history, name) => {
    history.push(`/pokemon/${name}`);
};

export const goToPokedexPage = (history) => {
    history.push('/pokedex');
};

export const goToBattlePage = (history) => {
    history.push('/batalha');
}