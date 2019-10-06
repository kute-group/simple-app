import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Row, Col, Icon } from 'antd';

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
              <div className="cart">
                <Link to="/login">Đăng ký/đăng nhập</Link>
                <Link to="/cart"> <Icon type="shopping-cart" /> Giỏ hàng</Link>
              </div>
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
              <Menu.Item key="1"><Link to="/">Trang chủ</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/about">Giới thiệu</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/themes">Kho giao diện</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/news">Tin tức</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/services">Dịch vụ</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/courses">Khoá học</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/contact">Liên hệ</Link></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default AppHeader;
