import React from 'react';
import { Card, Tooltip, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;

const CustomCard = ({ title, onClick }) => {
  return (
    <Card style={{ width: 300 }} onClick={onClick}>
      <Meta
        avatar={
          <Avatar size="large" icon={<UserOutlined />} />
        }
        title={title}
      />
      <Divider />
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}

export default CustomCard;