import React from 'react';
import { Button, Layout, Row, Space } from 'antd';

import Logo from '../common/Logo';

import '../styles/header.css';

const Header = () => (
  <Layout.Header className='hat'>
    <Row justify='space-between'>
      <Logo />
      <Space size='large'>
        <Button type='default' shape='round'>
          Log in
        </Button>
        <Button type='primary' shape='round'>
          Sign up
        </Button>
      </Space>
    </Row>
  </Layout.Header>
);

export default Header;
