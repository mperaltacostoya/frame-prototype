import React from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

const CustomComment = ({ name, content }) => {
  return (
    <Comment
      author={<a>{name}</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
}

export default CustomComment;