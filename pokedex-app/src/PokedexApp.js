import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Container } from './styles/PokemonApp';
import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';


const PokedexApp = () => {

    return (
        <Provider store={store}>
            <Container>
                <PokemonList />
                < PokemonInfo />
            </Container>
        </Provider>
    )
}

export default PokedexApp
