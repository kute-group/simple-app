import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd';

const logo = require('../assets/images/logo.png');

const { Header} = Layout;

function AppHeader() {
  return(
    <div>
      <div className="top">
        <div className="top-layout">
          <Row>
            <Col span={12}>
                <p>Chào mừng bạn đến với thiết kế web 5 ngày, chúng tôi cung cấp kho theme đủ thể loại.</p>
            </Col>
            <Col span={12}>
            hello
            </Col>
          </Row>
        </div>
      </div>
      <Header className="header">
        <Row>
          <Col span={6}>
            <div className="logo">
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>  
          </Col>
          <Col span={18}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '60px' }}
            >
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/contact">Contact</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/any">Home</Link></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default AppHeader;
