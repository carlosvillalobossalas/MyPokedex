import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    /* border: 3px solid black; */
    border-bottom: 2px solid red;
    margin-right: 20px;
    background-color: #FFFFFF;
    height: 400px;
    display: flex;
    position: relative;
    align-items: center;
    align-self: center;
    justify-content: center;
`

export const InfoContainer = styled.div`
    /* border: 2px solid black; */
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PokemonImg = styled.img`
    width: 250px;
    height: 250px;
`

export const PokemonName = styled.strong`
    margin: 20px 0px;
    font-size: 1.7rem;
`

export const TypesContainer = styled.div`
    display: flex;
`
export const TypeCard = styled.div`
    background-color: #FFE7E7;
    padding: 5px 50px;
    margin: 5px 20px;
    border-radius: 5px;
    
`