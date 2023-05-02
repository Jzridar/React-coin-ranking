import React, { useState, useEffect } from 'react'

//This package is used to format long numbers to readable ones
import millify from 'millify'
//Statistic component used when want to display statistic data with description
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom';
import getCryptos from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import axios from 'axios';

const { Title } = Typography
export default function Homepage() {


  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    getCryptos(1).then((response) => {//Fetch one coin to get the response for crypt stats
      console.log(response)
      setCryptos(response.data)
    }).catch((err) => console.log(err));
  }, [])

  const worldWideCryptoStats = cryptos?.data?.stats;
  console.log(worldWideCryptoStats);
  return (
    <>

      <Title level={2} className='heading'>Worldwide Crypto Stats</Title>
      {worldWideCryptoStats &&
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrenies" value={millify(worldWideCryptoStats.total)} /> </Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(worldWideCryptoStats.totalExchanges)} /> </Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(worldWideCryptoStats.totalMarketCap)} /> </Col>
          <Col span={12}><Statistic title="Total 24Hr Volume" value={millify(worldWideCryptoStats.total24hVolume)} /> </Col>
          <Col span={12}><Statistic title="Total Market" value={millify(worldWideCryptoStats.totalMarkets)} /> </Col>
        </Row>
      }
      <div>
        <Title level={2} className='home-title'>Top 10 currencies</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies" >Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
    </>
  )
}
