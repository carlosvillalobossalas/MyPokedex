import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, InfoContainer, PokemonImg, PokemonName, TypeCard, TypesContainer } from '../styles/PokemonInfoUpper'

const PokemonInfoUpper = () => {
    const { pokemonActivo } = useSelector(state => state.data);
    const [eggGroups, setEggGroups] = useState([]);

    const getEggGroups = useCallback(
        async () => {
            const resp = await axios({
                method: 'GET',
                url: pokemonActivo.species.url
            });
            setEggGroups(resp.data.egg_groups);
        },
        [pokemonActivo],
    );

    useEffect(() => {
        if (pokemonActivo) {
            getEggGroups();
        }

    }, [pokemonActivo, getEggGroups]);

    return (
        <Container>
            {
                pokemonActivo ? (
                    <>
                        <InfoContainer>
                            <PokemonImg src={
                                pokemonActivo.sprites.other['official-artwork'].front_default
                            } />
                            <PokemonName>{pokemonActivo.name}</PokemonName>
                            <TypesContainer>
                                {
                                    pokemonActivo.types.map((e, index) => (
                                        <TypeCard key={index}>{e.type.name}</TypeCard>
                                    ))
                                }
                            </TypesContainer>
                        </InfoContainer>
                        <InfoContainer>
                            <div style={{ textAlign: 'left' }}>
                                <strong>Information</strong>
                                <p><strong>Weight: </strong>{(pokemonActivo.weight / 4.536).toFixed(1)} lbs.</p>
                                <p><strong>Height: </strong>{(pokemonActivo.height / 3.048).toFixed(2)}</p>
                                <strong>Species: { }</strong>
                                <p>
                                    <strong>Egg Groups: </strong>
                                    {eggGroups?.map((e, index) => {
                                        if (index === 1) {
                                            return ' and ' + e.name
                                        }
                                        return e.name
                                    })}
                                </p>
                                <p>
                                    <strong>Abilities: </strong>
                                    {pokemonActivo.abilities.map((e, index) => {
                                        let ability = '';
                                        if (index === pokemonActivo.abilities.length - 1) ability += ', ';
                                        return ability += e.ability.name;
                                    })}
                                </p>
                            </div>

                        </InfoContainer>
                    </>
                ) : 'Inactivos'
            }
        </Container>
    )
}

export default PokemonInfoUpper
