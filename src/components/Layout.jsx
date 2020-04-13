import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function CustomLayout({ children }) {


  return (
    <Layout>
      <Sider theme='light' className='background-silver'>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['sub0']}
          style={{ height: '100vh', borderRight: 0, backgroundColor: '#D9D9DB' }}
        >
          <Menu.Item key="sub0"><Link to="/">Home</Link></Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                subnav 1
              </span>
            }
            style={{ backgroundColor: '#D9D9DB' }}
          >
            <Menu.Item style={{ backgroundColor: '#f0f0f0' }} key="1">option1</Menu.Item>
            <Menu.Item style={{ backgroundColor: '#f0f0f0' }} key="2">option2</Menu.Item>
            <Menu.Item style={{ backgroundColor: '#f0f0f0' }} key="3">option3</Menu.Item>
            <Menu.Item style={{ backgroundColor: '#f0f0f0' }} key="4">option4</Menu.Item>
          </SubMenu>
          <Menu.Item key="sub2"><Link to="/view">View</Link></Menu.Item>
          <Menu.Item key="sub3">Item3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className='background-white'>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default CustomLayout;