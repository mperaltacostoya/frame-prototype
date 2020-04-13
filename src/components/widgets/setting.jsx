import React from 'react';
import noop from 'lodash/noop';
import { Switch } from 'antd';

const Setting = () => {
  return (
    <div className='inline setting'>
      <div>
        Setting
      </div>
      <Switch defaultChecked onChange={noop} />
    </div>    
  );
}

export default Setting;