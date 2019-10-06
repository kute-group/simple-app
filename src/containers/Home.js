import React from 'react';
import { connect } from 'react-redux'
import { Layout, List, Spin,  Row, Col, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom'


import { getPosts } from '../redux/actions/post';
import AppBanner from '../components/AppBanner';
import AppSidebar from '../components/AppSidebar';
const { Content } = Layout;

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function Home (props){

  React.useEffect(() => {
    document.title = 'Home Page';
    if(props.post.items.length <= 0){
      props.dispatch(getPosts());
    }

  }, []);

  return (
    <Content>
      <AppBanner />
      <Row>
        <Col span={5}>
          <AppSidebar />
        </Col>
        <Col span={19}>
          {
            props.post.loading ? <Spin /> : (
              <List
                itemLayout="vertical"
                size="large"
                dataSource={props.post.items}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                      <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                      <IconText type="message" text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                      title={<Link to={"/post/" + item.id +"/" +item.slug}>{item.title.rendered}</Link>}
                    />
                    <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                  </List.Item>
                )}
              />
            )
          }
        </Col>
      </Row>
    </Content>
  );
}

export default connect(mapStateToProps)(Home);
