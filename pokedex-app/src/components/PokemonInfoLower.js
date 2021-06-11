import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../styles/PokemonInfoLower'

const PokemonInfoLower = () => {
    const { pokemonActivo } = useSelector(state => state.data);
    const [evolutionChainUrl, setEvolutionChainUrl] = useState();
    const [evolutionChain, setEvolutionChain] = useState();


    // console.log(pokemonActivo)
    const getSpecies = useCallback(
        async () => {
            const resp = await axios({
                method: 'GET',
                url: pokemonActivo.species.url
            });

            setEvolutionChainUrl(resp.data.evolution_chain.url)

        },
        [pokemonActivo],
    );

    const getEvolutionChain = useCallback(
        async () => {
            const resp = await axios({
                method: 'GET',
                url: evolutionChainUrl
            });

            const evolutionList = [];
            const ec = resp.data.chain;
            evolutionList.push({
                name: ec.species.name,
                url: ec.species.url
            })
            console.log(evolutionList)
            ec.evolves_to.forEach(first => {
                if (first['species'] !== undefined) {
                    evolutionList.push({
                        name: first['species'].name,
                        url: first['species'].url
                    })
                }
                first.evolves_to.forEach(second => {
                    if (second['species'] !== undefined) {
                        evolutionList.push({
                            name: second['species'].name,
                            url: second['species'].url
                        })
                    }
                })
            });
            console.log(evolutionList);

            setEvolutionChain(evolutionList);

        },
        [evolutionChainUrl],
    );

    const getPokemonImg = async (name) => {
        // const resp = await axios({
        //     method: 'GET',
        //     url
        // });

        // console.log(resp.data)

        console.log()
    }

    const createEvolutionChain = () => {
        evolutionChain.forEach(pokemon => {
            // console.log(pokemon)
            getPokemonImg(pokemon.name)
        })
    }

    useEffect(() => {
        if (pokemonActivo) {
            getSpecies();
        }
    }, [getSpecies, pokemonActivo]);

    useEffect(() => {
        if (evolutionChainUrl) {
            getEvolutionChain()
        }
    }, [getEvolutionChain, pokemonActivo, evolutionChainUrl]);

    useEffect(() => {
        if (evolutionChain) {
            createEvolutionChain()
        }
    }, [evolutionChain])

    return (
        <Container>
            {
                evolutionChain ? (
                    evolutionChain.map(e => e.name + ' ')
                ) : null
            }
        </Container>
    )
}

export default PokemonInfoLower
