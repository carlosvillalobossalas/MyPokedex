const { default: axios } = require('axios');
const { response } = require('express');

const getInitialData = async (req, res = response) => {
    try {
        const resp = await axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=15'
        });

        // console.log(resp.data);

        res.status(200).json({
            ok: true,
            data: resp.data
        })
    } catch (error) {
        console.log('getInitialData Error', error)
        res.status(500).json({
            ok: false
        })
    }
};

const getMoreData = async (req, res = response) => {
    const { url } = req.body;
    try {
        const resp = await axios({
            method: 'GET',
            url
        });

        console.log(resp.data);

        res.status(200).json({
            ok: true,
            data: resp.data
        })
    } catch (error) {
        console.log('getMoreData Error', error)
        res.status(500).json({
            ok: false
        })
    }
};

const getPokemon = async (req, res = response) => {
    // console.log('params', req.query.url)
    const { url } = req.query;
    try {
        const resp = await axios({
            method: 'GET',
            url
        });

        console.log(resp.data);

        res.status(200).json({
            ok: true,
            data: resp.data
        })
    } catch (error) {
        console.log('getPokemon Error', error)
        res.status(500).json({
            ok: false
        })
    }
}

module.exports = {
    getInitialData,
    getMoreData,
    getPokemon
}