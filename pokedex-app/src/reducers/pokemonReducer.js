const initialState = {
    pokemonList: [],
    nextPage: '',
    pokemonActivo: ''
}

export const pokemonReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case 'initial':
            return {
                ...state,
                pokemonList: action.data,
                nextPage: action.nextPage
            }
        case 'morePokemon':
            return {
                ...state,
                pokemonList: [...state.pokemonList, ...action.data],
                nextPage: action.nextPage
            }
        case 'activo':
            return {
                ...state,
                pokemonActivo: action.pokemon
            }
        default:
            return state;
    }
}