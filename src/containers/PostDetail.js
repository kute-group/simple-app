import React from 'react';
import { connect } from 'react-redux'
import { Button, List, Spin} from 'antd';
import { Link } from 'react-router-dom'

import { getPost } from '../redux/actions/post';

const mapStateToProps = state => {
  console.log(state);
  return {
    post: state.post
  };
};

function PostDetail (props){
  const [message, setMessage] = React.useState('Hello home page');
  const [count, setCount] = React.useState(0);
  const [todos, setTodo] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setMessage('hello new world');
  }

  const handleCount = () => {
    setCount(count+1);
  }

  React.useEffect(() => {
    document.title = 'Detail page';
    console.log(props);
    props.dispatch(getPost(props.match.params.id));

  }, []);

  if(props.post.loading) return <Spin />

  return (<div>
    <h1>{props.post.item.title ? props.post.item.title.rendered : ''}</h1>
    <div dangerouslySetInnerHTML={{ __html: props.post.item.content ? props.post.item.content.rendered : '' }} />
  </div>);
}

export default connect(mapStateToProps)(PostDetail);
