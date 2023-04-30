import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import React, { useEffect, useState } from 'react';
import getCryptos from '../services/cryptoApi';


export default function Cryptocurrencies({ simplified }) {
  const [coins, setCoins] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const count = simplified ? 10 : 100

  useEffect(() => {
    
    if (searchTerm) {
      const filteredData = coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
      setCoins(filteredData);
      return
    }

    getCryptos(count).then((res) => {
      console.log(res?.data?.data?.coins)
      setCoins(res?.data?.data?.coins);
      
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
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
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
