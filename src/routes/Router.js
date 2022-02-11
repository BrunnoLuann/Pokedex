import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/Home/HomePage';
import PokedexPage from '../pages/Pokedex/PokedexPage';
import PokemonDetailsPage from '../pages/Details/PokemonDetailsPage';
import Batalha from '../pages/Batalha/Batalha';


function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/pokedex'>
                    <PokedexPage />
                </Route>
                <Route exact path='/pokemon/:name'>
                    <PokemonDetailsPage />
                </Route>
                <Route exact path='/batalha'>
                    <Batalha />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;