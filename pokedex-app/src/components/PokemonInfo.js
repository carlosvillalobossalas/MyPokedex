import React from 'react';
import { Container } from '../styles/PokemonInfo'
import PokemonInfoLower from './PokemonInfoLower'
import PokemonInfoUpper from './PokemonInfoUpper'

const PokemonInfo = () => {
    return (
        <>
            <Container>
                <PokemonInfoUpper />
                <PokemonInfoLower />
            </Container>
        </>
    )
}

export default PokemonInfo
