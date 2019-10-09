import React from 'react';
import { connect } from 'react-redux'
import { Layout, List, Spin,  Row, Col, Icon, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom'


import { getPosts, getPostCates } from '../redux/actions/post';
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
    props.dispatch(getPostCates());
    props.dispatch(getPosts());
  }, []);
  console.log(props);

  return (
    <Content>
      <AppBanner />
      <br/>
      <Row>
        <Col span={5}>
          <AppSidebar />
        </Col>
        <Col span={1}/>
        <Col span={18}>
          {
            props.post.loading ? <div className="spiner-area"><Spin /> loading</div>: (
              <List
                itemLayout="vertical"
                size="large"
                dataSource={props.post.items}
                header={
                  <div>
                    <h2>Bài viết mới nhất</h2>
                  </div>
                }
                footer={
                  <div style={{textAlign:"center", padding: "20px"}}>
                    <Button type="primary" ghost> Xem thêm</Button>
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
                        src={item._embedded['wp:featuredmedia']['0'].source_url}
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item._embedded['wp:featuredmedia']['0'].source_url} />}
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
