import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import React, { useEffect, useState } from 'react';
import getCryptos from '../services/cryptoApi';


export default function Cryptocurrencies({ simplified }) {//Take one property to decide coin count to fetch
  const [coins, setCoins] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const count = simplified ? 10 : 100

  useEffect(() => {
    //This block will be executed in two scenarios:
    // 1. On component render 
    //2.Whenever the searchTerm value changes

    if (searchTerm) {
      const filteredData = coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm));
      setCoins(filteredData);
      return
    }

    getCryptos(count).then((response) => {
      console.log(response)
      console.log(response?.data?.data?.coins)
      setCoins(response?.data?.data?.coins);
    })
  }, [searchTerm]);


  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}

      {/* Using the grid property called gutter, spacing the cards vertically and horizontally */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link key={currency.uuid} >
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}
