import React from 'react';
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd';

function NotFound() {
  return(
    <Result
      status="404"
      title="404"
      subTitle="Rất tiếc, trang bạn cần tìm không thấy."
      extra={<Link to="/"><Button type="primary">Về trang chủ</Button></Link>}
    />
  );
};

export default NotFound;
