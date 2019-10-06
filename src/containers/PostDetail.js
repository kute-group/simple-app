import React from 'react';
import { connect } from 'react-redux'
import { Spin} from 'antd';

import { getPost } from '../redux/actions/post';

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

function PostDetail (props){
  React.useEffect(() => {
    document.title = 'Detail page';
    props.dispatch(getPost(props.match.params.id));

  }, []);

  if(props.post.loading) return <Spin />

  return (<div>
    <h1>{props.post.item.title ? props.post.item.title.rendered : ''}</h1>
    <div dangerouslySetInnerHTML={{ __html: props.post.item.content ? props.post.item.content.rendered : '' }} />
  </div>);
}

export default connect(mapStateToProps)(PostDetail);
