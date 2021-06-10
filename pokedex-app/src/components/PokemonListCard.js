import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { PokemonCardContainer, PokemonId, PokemonImg, PokemonName } from '../styles/PokemonList';

const PokemonListCard = ({ pokemon }) => {

    const [pokemonInfo, setPokemonInfo] = useState();

    const getPokemonInfo = useCallback(
        async () => {
            const resp = await axios({
                method: 'GET',
                url: pokemon.url
            });

            console.log(resp)
            if (resp.status === 200) {
                setPokemonInfo(resp.data)
            }
        },
        [pokemon.url],
    )

    useEffect(() => {
        getPokemonInfo()
    }, [getPokemonInfo])
    return (
        <>
            {
                pokemonInfo ? (
                    <PokemonCardContainer>
                        <PokemonImg src={pokemonInfo.sprites.front_default} />
                        <PokemonName>{pokemonInfo.name}</PokemonName>
                        <PokemonId>#{pokemonInfo.id}</PokemonId>
                    </PokemonCardContainer >
                ) : null
            }
        </>
    )
}

export default PokemonListCard
