//To differentiate react componencts from .js files,I've saved all the components as .jsx files
import React from 'react'
// antdesign is a design system for enterprise level products
import { Button, Menu, Typography, Avatar } from 'antd'
import { HomeOutlined, MoneyCollectFilled, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import icon from "../images/cryptologo.jpg"

export default function Navbar() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>

        {/* Avatars can be used to represent people or objects. It supports images, Icons, or letters. */}
        <Avatar src = {icon} size={'large'}/>

        {/*Typography is for Basic text writing, including headings, body text, lists, and more. */}
        <Typography.Title level={2} className='logo'>
          <link to="/">Coin Ranking</link>
        </Typography.Title>
        {/* <Button className='menu-control-container'>

        </Button> */}
      </div>

    </div>
  )
}
