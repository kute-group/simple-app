import React from 'react';
import { connect } from 'react-redux';
import { Layout, Spin, Row, Col } from 'antd';

import { getPost } from '../redux/actions/post';
import AppSidebar from '../components/AppSidebar';
const { Content } = Layout;

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

function About (props){
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
        <Col span={19}>
          {
            props.post.loading ? <div className="spiner-area"> <Spin /> loading </div> : (
              <div>
                <h1>{props.post.item.title ? props.post.item.title.rendered : ''}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.post.item.content ? props.post.item.content.rendered : '' }} />
              </div>
            )
          }
        </Col>
      </Row>

    </Content>
  );
}

export default connect(mapStateToProps)(About);
