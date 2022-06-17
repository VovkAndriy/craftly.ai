import { Space, Typography } from 'antd';
import React from 'react';

const ToolCard = ({ icon, title }) => (
  <Space direction='vertical'>
    {!!icon ? icon : <img src='local_icon.png' alt='local_icon' />}
    <Typography>
      <Typography.Text strong>{title}</Typography.Text>
    </Typography>
  </Space>
);

export default ToolCard;
