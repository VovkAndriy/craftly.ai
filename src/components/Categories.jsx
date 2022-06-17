import React from 'react';
import { Card, Layout, Row, Typography } from 'antd';

import ToolCard from '../common/ToolCard';

import '../styles/categories.css';

const Categories = ({ tabs, onClick }) => (
  <Layout.Content className='layout'>
    <Row justify='center'>
      <Typography>
        <Typography.Title className='layout_header' level={3}>
          Browse by Tools
        </Typography.Title>
      </Typography>
    </Row>
    <Row gutter={[20, 20]} className='list'>
      {!!tabs &&
        tabs.map(({ id, title }, index) => (
          <Card.Grid key={index} className='card' onClick={() => onClick(id)}>
            <ToolCard icon={''} title={title} />
          </Card.Grid>
        ))}
    </Row>
  </Layout.Content>
);

export default Categories;
