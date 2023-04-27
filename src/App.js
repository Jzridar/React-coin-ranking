
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'
import './App.css'
//below import gets all the components in one line to it effecient and good looking
import { Navbar, Homepage, Cryptocurrencies } from './components'


function App() {
  const apikey = process.env.APIKEY // Assignig a variable to my apikey so that I can call the variable whereever needed by keeping my key protected
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">

        {/* //Layouts component is an ant-design component-Not a self closing one,lays everything flat */}
        <Layout>
          <div className="routes">

            {/* Routes component is from router-dom,it  allows us to have multiple routes...Exact path means its going
            to trigger only if its exactly the same URL */}
            <Routes>
              <Route exact path="/" element={<Homepage />}>
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              </Route>
            </Routes>

          </div>
        </Layout>



        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoRanking <br />
            Thanks for visiting!
          </Typography.Title>

          {/* space is the ant design way od saying div tag */}
          <Space>
            <Link to='/'>Home </Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>

          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;


