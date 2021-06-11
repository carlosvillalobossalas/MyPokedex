import axios from "axios";

const getFirstPokemon = async (url) => {
    const resp = await axios({
        method: 'GET',
        url
    });

    return resp.data;
}

export const getInitialData = () => {
    return async (dispatch) => {
        const resp = await axios({
            method: 'GET',
            url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15",
        });

        if (resp.status === 200) {
            const activo = await getFirstPokemon(resp.data.results[0].url);

            dispatch({
                type: 'initial',
                data: resp.data.results,
                nextPage: resp.data.next,
                pokemon: activo
            })
        }
    }
}

export const getMoreData = (url) => {
    return async (dispatch) => {
        const resp = await axios({
            method: 'GET',
            url
        });

        if (resp.status === 200) {
            dispatch({
                type: 'morePokemon',
                data: resp.data.results,
                nextPage: resp.data.next
            })
        }
    }
}