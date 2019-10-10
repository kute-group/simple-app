import React from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Row, Col, Button, Typography, Divider } from 'antd';

import { getPost } from '../redux/actions/post';
import AppSidebar from '../components/AppSidebar';
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

function Contact (props){
  React.useEffect(() => {
    document.title = 'Detail page';
    const params = {
      type: 'pages',
      id: 429
    };
    props.dispatch(getPost(params));

  }, []);

  return (
    <Content>
      <Row>
        <Col span={5}>
          <AppSidebar />
        </Col>
        <Col span={1}/>
        <Col span={18}>
          <br/>
          <br/>
          <Typography>
            <Title level={3} style={{textAlign: "center"}}>LIÊN HỆ VỚI  CHÚNG TÔI</Title>
          </Typography>
          <Divider />
          Họ và tên
          <Input placeholder="Họ và tên" />
          Họ và tên
          <Input placeholder="Họ và tên" />
          Họ và tên
          <Input placeholder="Họ và tên" />
          Họ và tên
          <Input placeholder="Họ và tên" />
          Họ và tên
          <Input placeholder="Họ và tên" />
          Họ và tên
          <Input placeholder="Họ và tên" />
          <br/>
          <Button type="primary">Primary</Button>
          <br/>
          <br/>
        </Col>
      </Row>

    </Content>
  );
}

export default connect(mapStateToProps)(Contact);
