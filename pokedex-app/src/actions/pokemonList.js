import axios from "axios";

const getPokemon = async (urlPokemon) => {
    // console.log(url)
    const url = 'http://localhost:3000/api/pokemon/pokemon'
    const resp = await axios({
        method: 'GET',
        url: url,
        params: {
            url: urlPokemon
        }
    });
    // console.log('GET POKEMON', resp.data.data)
    return resp.data.data;
}

export const getInitialData = () => {
    return async (dispatch) => {
        const resp = await axios({
            method: 'GET',
            url: "http://localhost:3000/api/pokemon/initial",
        });

        const { data } = resp.data;

        // console.log(data)
        if (resp.status === 200) {
            const url = data.results[0].url
            const activo = await getPokemon(url);

            // console.log(activo)
            dispatch({
                type: 'initial',
                data: data.results,
                nextPage: data.next,
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