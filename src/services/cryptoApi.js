import axios from 'axios';
//  Assignig a variable to my apikey so that I can call the variable where ever needed by keeping my key protected
  //const apikey = process.env.APIKEY

const BASE_URL =  'https://coinranking1.p.rapidapi.com/coins'
// console.log(process.env.APIKEY)

export const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '1d7e2ca5e1mshbee1bd6863b57b2p1fad59jsn429a088e0c79',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

const getCryptos = async (count) => { //This method will return Promise<AxiosResponse<any, any>>
    options.url = BASE_URL + `?limit=${count}`//Passing the limit as query string parameter
    const getResponse = axios.request(options)//Call the API with options provided.
    return getResponse;
};

export default getCryptos

