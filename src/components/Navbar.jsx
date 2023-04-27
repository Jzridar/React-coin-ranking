//To differentiate react componencts from .js files,I've saved all the components as .jsx files
import React from 'react'
// antdesign is a design system for enterprise level products
import { Button, Menu, Typography, Avatar } from 'antd'

//These are different kind of icons from we are using from ant-design
import { HomeOutlined, MoneyCollectFilled, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";


import icon from "../images/cryptologo.jpg"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>

        {/* Avatars can be used to represent people or objects. It supports images, Icons, or letters. */}
        <Avatar src = {icon} size={'large'}/>

        {/*Typography is for Basic text writing, including headings, body text, lists, and more. */}
        <Typography.Title level={2} className='logo'>
          <Link to="/"/>
        </Typography.Title>
        
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
        <Link to ="/">Home</Link>
      </Menu.Item>
      </Menu>
      <Menu theme='dark'>
        <Menu.Item icon={<FundOutlined/>}>
        <Link to ="/cryptocurrencies">CryptoCurrencies</Link>
      </Menu.Item>
      </Menu>

    </div>
  )
}
