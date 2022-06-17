import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import '../styles/navigation.css';

const Navigation = () => (
  <Layout.Content className='breadcrumbWrapper'>
    <Breadcrumb separator='>'>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Blog</Breadcrumb.Item>
    </Breadcrumb>
  </Layout.Content>
);

export default Navigation;
