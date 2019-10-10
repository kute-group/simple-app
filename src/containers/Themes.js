import React from 'react';
import { connect } from 'react-redux';
import { Layout, Spin, Row, Col, Card, List, Input, Select, Typography, Divider, Button } from 'antd';

import { getPost } from '../redux/actions/post';
import AppSidebar from '../components/AppSidebar';
const { Content } = Layout;
const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

function Themes() {
  return(
    <Content>
      <Row>
        <Col span={24}>
          <br/>
          <br/>
          <Typography>
            <Title level={3} style={{textAlign: "center"}}>KHO GIAO DIỆN CỦA CHÚNG TÔI</Title>
          </Typography>
          <Divider />
          <Col span={12}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton="Search"
            />
          </Col>
          <Col span={6}>
          </Col>
          <Col span={6}>
            <Select defaultValue="Sản phẩm mới nhất" style={{width: '100%'}}>
              <Option value="jack">Sản phẩm mới nhất</Option>
              <Option value="lucy">Sản phẩm mới nhất</Option>
              <Option value="Yiminghe">Sản phẩm mới nhất</Option>
            </Select>
          </Col>
          <br/>
          <br/>
          
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: '99%' }}
                  cover={<img alt="example" src="https://thietkeweb5ngay.com/wp-content/uploads/2019/06/matong-400x400-380x380.jpg" />}
                >
                  <Meta title="Mẫu web gia công cơ khí" description="SHOP BÁN HÀNG" />
                  <br/>
                  <Button type="primary" shape="round" size='small'>Chi tiết</Button>
                  <Button type="primary" shape="round"  size='small'>Xem website</Button>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>

    </Content>
  );
};

export default  connect(mapStateToProps)(Themes);
