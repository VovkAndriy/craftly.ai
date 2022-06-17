import React from 'react';
import { Tag, Card, Row, Col, Typography } from 'antd';
import { format } from 'date-fns';

import { formatText } from '../helpers/formatText';
import { formatTag } from '../helpers/formatTag';

import '../styles/postCard.css';

const PostCard = ({ bg, toolID, title, author, date }) => (
  <Card
    className='postCard'
    cover={<img alt='card' src={!!bg ? bg : 'postCard.png'} />}
  >
    <Tag color='gray' className='tag'>
      {formatTag(toolID)}
    </Tag>
    <Typography.Title level={5}>{formatText(title)}</Typography.Title>
    <Row justify='space-between'>
      <Col>{author}</Col>
      <Col>{format(new Date(date), 'LLL d, yyyy')}</Col>
    </Row>
  </Card>
);

export default PostCard;
