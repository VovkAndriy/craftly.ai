import React from 'react';
import { Layout, Row, Typography, Input, Space } from 'antd';

import '../styles/banner.css';

const Banner = ({ onSearch }) => (
  <Layout.Content className='bannerContainer'>
    <img
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
      }}
      src='image_squares.png'
      alt='image_squares'
    />
    <img
      style={{
        position: 'absolute',
        top: 0,
        left: -40,
      }}
      src='image_figure.png'
      alt='image_figure'
    />
    <img
      style={{
        position: 'absolute',
        bottom: '-2.5%',
        left: '4%',
        zIndex: 1,
      }}
      src='image.png'
      alt='image_set'
    />
    <Row justify='center'>
      <Space direction='vertical' className='bannerWrapper'>
        <Typography className='heading'>
          <Typography.Title className='header_text'>
            Top product news, content marketing tips, and insights.
          </Typography.Title>
        </Typography>
        <Input.Search
          className='searchBar'
          placeholder='Search Tools'
          allowClear
          enterButton='Search'
          size='large'
          onSearch={onSearch}
        />
      </Space>
    </Row>
  </Layout.Content>
);

export default Banner;
