
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'
import './App.css'
//below import gets all the components in one line to it effecient and good looking
import { Navbar, Homepage, Cryptocurrencies } from './components'


function App() {
  
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">

        {/* //Layouts component Handles the overall layout of a page.*/}
        <Layout>
        <div className="routes">
        <Routes>
                  <Route path="/home" element={<Homepage />}/>
                  <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          </Routes>
      
        </div>
        </Layout>


        <div className="footer">

          {/* Typography component used when need to display a title or paragraph contents in Articles/Blogs/Notes */}
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoRanking <br />
            Thanks for visiting!
          </Typography.Title>

          {/* space component is to give space between the links */}
          <Space>
            <Link to='/home'>Home </Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;


