//To differentiate react componencts from .js files,I've saved all the components as .jsx files
import React,{useEffect,useState} from 'react'
// antdesign is a design system for enterprise level products
import { Button, Menu, Typography, Avatar } from 'antd'

//These are different kind of "icons" from we are using from ant-design
import { HomeOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";


import icon from "../images/cryptologo.jpg"
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <div className='nav-container'>
      <div className='logo-container'>

        {/* Avatars can be used to represent people or objects. It supports images, Icons, or letters. */}
        <Avatar src = {icon} size={'500'}/>

        {/*Typography is for Basic text writing, including headings, body text, lists, and more. */}
        <Typography.Title level={1} className="logo"><Link to="/">CryptoRanking</Link></Typography.Title>

        <Button className="menu-control-container" ><MenuOutlined /></Button>
      </div>
      { (
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        </Menu>
      )}
    </div>
  )
}
