export const pokeTypes = (props) => {
    if (props.type === 'normal') {
        return 'background-color: #A8A878;';
    }
    else if (props.type === 'fire') {
        return 'background-color: #F08030;';
    }
    else if (props.type === 'grass') {
        return 'background-color: #78C451;';
    }
    else if (props.type === 'water') {
        return 'background-color: #6890F0;';
    }
    else if (props.type === 'electric') {
        return 'background-color: #F8D030;';
    }
    else if (props.type === 'ice') {
        return 'background-color: #98D8D8;';
    }
    else if (props.type === 'fighting') {
        return 'background-color: #C03028;';
    }
    else if (props.type === 'poison') {
        return 'background-color: #9F409F;';
    }
    else if (props.type === 'ground') {
        return 'background-color: #E9D8AA;';
    }
    else if (props.type === 'flying') {
        return 'background-color: #A890F0;';
    }
    else if (props.type === 'psychic') {
        return 'background-color: #F85888;';
    }
    else if (props.type === 'bug') {
        return 'background-color: #A8B820;';
    }
    else if (props.type === 'rock') {
        return 'background-color: #B8A038;';
    }
    else if (props.type === 'ghost') {
        return 'background-color: #705898;';
    }
    else if (props.type === 'dark') {
        return 'background-color: #705848;';
    }
    else if (props.type === 'dragon') {
        return 'background-color: #7038F8;';
    }
    else if (props.type === 'steel') {
        return 'background-color: #D4D3DF;';
    }
    else if (props.type === 'fairy') {
        return 'background-color: #F0B6BC;';
    }
}

export const pokeTypePT = (poke) =>{
    if(poke === "fire"){
        return 'fogo'
    }
    else if(poke === 'grass'){
        return 'grama'
    }
    else if(poke === 'water'){
        return 'água'
    }
    else if(poke === 'electric'){
        return 'elétrico'
    }
    else if(poke === 'ice'){
        return 'gelo'
    }
    else if(poke === 'fighting'){
        return 'lutador'
    }
    else if(poke === 'poison'){
        return 'veneno'
    }
    else if(poke === 'ground'){
        return 'terra'
    }
    else if(poke === 'flying'){
        return 'voador'
    }
    else if(poke === 'psychic'){
        return 'psíquico'
    }
    else if(poke === 'bug'){
        return 'inseto'
    }
    else if(poke === 'rock'){
        return 'pedra'
    }
    else if(poke === 'ghost'){
        return 'fantasma'
    }
    else if(poke === 'dark'){
        return 'escuridão'
    }
    else if(poke === 'dragon'){
        return 'dragão'
    }
    else if(poke === 'steel'){
        return 'aço'
    }
    else if(poke === 'fairy'){
        return 'fada'
    }
    else if(poke === 'normal'){
        return 'normal'
    }
}