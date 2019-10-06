import React from 'react';
import './App.css';
import { Layout, BackTop } from 'antd';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const { Content } = Layout;

function App(props) {
  return (
  <Layout>
    <AppHeader />
    <br/>
    <Content>
      <Layout>
        {props.children}
      </Layout>
    </Content>
    <AppFooter />
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
  </Layout>
  );
}

export default App;
