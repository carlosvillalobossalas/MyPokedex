import styled from 'styled-components';

export const Container = styled.div`
    background-color: #CB2D2D;
    border: 2px solid black;
    height: 900px;
    overflow-y: scroll;
    margin: 30px 20px;
    width: 500px;
`

export const PokemonCardContainer = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    margin: 0px 50px;
`

export const PokemonImg = styled.img`
    width: 60px;
`
export const PokemonName = styled.p`
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0px 15px;
`
export const PokemonId = styled.p`
    color: #FFF;
    font-size: 1.2rem;
    font-weight: 300;
    right: 0;
    position: absolute;

`