import React, { useCallback, useEffect, useRef } from 'react';
import { Container } from '../styles/PokemonList';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData, getMoreData } from '../actions/pokemonList';
import PokemonListCard from './PokemonListCard';

const PokemonList = () => {

    const { pokemonList, nextPage } = useSelector(state => state.data)
    const dispatch = useDispatch();
    const scrollRef = useRef();


    const lastPokemon = useCallback(
        node => {
            if (scrollRef.current) scrollRef.current.disconnect()
            scrollRef.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    if (nextPage) {
                        dispatch(getMoreData(nextPage));
                    }
                }
            })
            if (node) scrollRef.current.observe(node);
        }, [nextPage, dispatch]);


    useEffect(() => {
        dispatch(getInitialData())
    }, [dispatch]);

    useEffect(() => {
    }, [pokemonList]);

    return (
        <>
            <Container>
                {
                    pokemonList?.map((e, index) => {
                        if (pokemonList.length - 1 === index) {
                            return <p ref={lastPokemon} key={e.name}>{e.name}</p>
                        } else {
                            return <PokemonListCard pokemon={e} key={e.name} />
                        }
                    })
                }
            </Container>
        </>
    )
}

export default PokemonList
