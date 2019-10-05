import React from 'react';
import { connect } from 'react-redux'
import { Button, List, Spin} from 'antd';
import { Link } from 'react-router-dom'

import { getPosts } from '../redux/actions/post';

const mapStateToProps = state => {
  console.log(state);
  return {
    post: state.post
  };
};

function Home (props){
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
    document.title = 'Home Page';
    if(props.post.items.length <= 0){
      props.dispatch(getPosts());
    }

  }, []);

  if(props.post.loading) return <Spin />

  return (<div>
    <h1>{message}</h1>
    <Button onClick={handleClick}>Click to change</Button>
    <h2>{count}</h2>
    <Button onClick={handleCount}>Add 1 more</Button>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={props.post.items}
      renderItem={item => (
        <List.Item>
          In-Progress] <Link to={"/post/" + item.id +"/" +item.slug}>{item.title.rendered}</Link>
        </List.Item>
      )}
    />
  </div>);
}

export default connect(mapStateToProps)(Home);
