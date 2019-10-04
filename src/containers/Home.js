import React from 'react';
import { Button, List, Spin} from 'antd';
import axios from 'axios';

function Home (){
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
    setLoading(true);
    const fetchTodos = async () => {
      const todosArr = await axios('https://jsonplaceholder.typicode.com/todos');
      setTodo(todosArr.data);
      setLoading(false);
    };

    fetchTodos();

  }, []);

  if(loading) return <Spin />

  return (<div>
    <h1>{message}</h1>
    <Button onClick={handleClick}>Click to change</Button>
    <h2>{count}</h2>
    <Button onClick={handleCount}>Add 1 more</Button>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={todos}
      renderItem={item => (
        <List.Item>
          In-Progress] {item.title}
        </List.Item>
      )}
    />
  </div>);
}

export default Home;
