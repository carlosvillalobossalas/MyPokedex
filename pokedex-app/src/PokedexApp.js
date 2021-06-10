import React from 'react';
import { Provider } from 'react-redux';
import PokemonList from './components/PokemonList';
import { store } from './store/store';

const PokedexApp = () => {

    return (
        <Provider store={store}>
            <PokemonList />
        </Provider>
    )
}

export default PokedexApp
