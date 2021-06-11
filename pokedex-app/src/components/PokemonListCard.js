import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PokemonCardContainer, PokemonId, PokemonImg, PokemonName } from '../styles/PokemonList';

const PokemonListCard = ({ pokemon }) => {

    const [pokemonInfo, setPokemonInfo] = useState();
    const [toggleActive, setToggleActive] = useState(false);
    const { pokemonActivo } = useSelector(state => state.data);
    const dispatch = useDispatch();

    const getPokemonInfo = useCallback(
        async () => {
            const resp = await axios({
                method: 'GET',
                url: pokemon.url
            });

            if (resp.status === 200) {
                setPokemonInfo(resp.data)
            }
        },
        [pokemon.url],
    );



    useEffect(() => {
        getPokemonInfo()
    }, [getPokemonInfo]);

    return (
        <>
            {
                pokemonInfo ? (
                    <PokemonCardContainer
                        active={pokemonActivo.name === pokemonInfo.name}
                        onClick={() => {
                            setToggleActive(!toggleActive)
                            dispatch({
                                type: 'activo',
                                pokemon: pokemonInfo
                            })
                        }}
                    >
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
