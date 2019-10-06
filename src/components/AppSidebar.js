import React from 'react';
import { connect } from 'react-redux'
import { List, Spin } from 'antd';

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

function AppSidebar(props) {
  return(
    <div>
      {
        props.post.loading ? <div className="spiner-area"><Spin /> loading</div>: (
          <List
            header={<div><h2>Danh mục</h2></div>}
            dataSource={props.post.cates}
            renderItem={item => (
              <List.Item>
                {item.name}
              </List.Item>
            )}
          />
        )
      }
    </div>
  );
};

export default connect(mapStateToProps)(AppSidebar);
