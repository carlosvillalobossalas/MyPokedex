import styled from 'styled-components';

export const Container = styled.div`
    background-color: #CB2D2D;
    border: 3px solid #E38383;
    border-radius: 10px;
    height: 900px;
    overflow-y: scroll;
    margin: 0px 20px;
    width: 500px;
`

export const PokemonCardContainer = styled.div`
    width: 85%;
    align-items: center;
    display: flex;
    position: relative;
    padding: 10px 35px;
    margin-bottom: 2.5px;
    background-color: ${({ active }) => (active ? '#710B0B' : '#460404')};

`

export const PokemonImg = styled.img`
    width: 60px;
`
export const PokemonName = styled.p`
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0px 20px;
`
export const PokemonId = styled.p`
    color: #FFF;
    font-size: 1.1rem;
    font-weight: 300;
    right: 0;
    position: absolute;
    padding-right: 40px;

`