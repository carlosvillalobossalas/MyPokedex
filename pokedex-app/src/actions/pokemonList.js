import axios from "axios";

export const getInitialData = () => {
    return async (dispatch) => {
        const resp = await axios({
            method: 'GET',
            url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15",
        });

        if (resp.status === 200) {
            dispatch({
                type: 'initial',
                data: resp.data.results,
                nextPage: resp.data.next
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