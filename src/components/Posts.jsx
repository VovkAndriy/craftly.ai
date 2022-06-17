import React from 'react';
import { Col, Layout, Row, Empty } from 'antd';
import PostCard from '../common/PostCard';
import '../styles/posts.css';

const Posts = ({ list }) => (
  <Layout.Content>
    <Row gutter={[15, 15]} className='fulfilled'>
      {list.length > 0 ? (
        list.map((item, index) => (
          <Col span={6} key={index}>
            <PostCard {...item} />
          </Col>
        ))
      ) : (
        <Row justify='center' className='empty'>
          <Empty />
        </Row>
      )}
    </Row>
  </Layout.Content>
);

export default Posts;
