import React from 'react';
import './App.css';
import { Layout } from 'antd';

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
  </Layout>
  );
}

export default App;
