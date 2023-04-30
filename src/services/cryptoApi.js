import axios from 'axios';
//  Assignig a variable to my apikey so that I can call the variable where ever needed by keeping my key protected
  //const apikey = process.env.APIKEY

const BASE_URL =  'https://coinranking1.p.rapidapi.com/coins'
const options = {
    method: 'GET',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        offset: '0'
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

const getCryptos = async (count) => {
    options.url = BASE_URL + `?limit=${count}`
    const getResponse = axios.request(options)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((err) => console.log(err));
    return getResponse;
};

export default getCryptos

