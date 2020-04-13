import React from 'react';
import { Progress } from 'antd';

const ProgressWithText = () => {
  return (
    <div> 
      <div className='legend'>$243K/Year</div>
      <div>retirement income @ 65 years old</div>
      <Progress type='line' strokeWidth={20} strokeColor='#377d28' percent={80} />
    </div>    
  );
}

export default ProgressWithText;