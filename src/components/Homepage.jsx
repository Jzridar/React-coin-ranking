import React, { useState, useEffect } from 'react'

//This package is used to format numbers
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom';
import getCryptos from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';


const { Title } = Typography
export default function Homepage() {

 
  const [cryptos, setCryptos] = useState([])


  useEffect(() => {
    getCryptos(1).then((res) => {
      console.log(res.data)
      setCryptos(res.data)
    })
  }, [])

  const globalStats = cryptos?.data?.stats;
  console.log(globalStats);
  return (
     <>
   
      <Title level={2} className='heading'>Worldwide Crypto Stats</Title>
      {globalStats &&
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrenies" value={millify(globalStats.total)} /> </Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /> </Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /> </Col>
          <Col span={12}><Statistic title="Total 24Hr Volume" value={millify(globalStats.total24hVolume)} /> </Col>
          <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /> </Col>
        </Row>
      }
      <div>
        <Title level={2} className='home-title'>Top 10 currencies</Title>
       <Title level={3} className='show-more'><Link to="/cryptocurrencies" >Show More</Link></Title>
      </div>
     <Cryptocurrencies simplified/>
    </>
  )
}
