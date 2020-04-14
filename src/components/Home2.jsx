import React from 'react';
import { Skeleton } from 'antd';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import Widget from './Widget';
import DoughnutWithTextChart from './widgets/doughnutWithText';
import ProgressWithTextChart from './widgets/progressWithText';
import SlopeChart from './widgets/slope';
import EducationalTip from './widgets/educationalTip';

function HomeClean() {
  return (
    <div>
      <PageHeader title={'Home'} />
      <div className='double-content'>
        <PageContent additionalClasses='even-content'>
          <div className='charts'>
            <DoughnutWithTextChart />
          </div>  
        </PageContent>
        <div className='even-content widget-container'>
          <div className='general-widget'>
            <ProgressWithTextChart />
          </div>
          <div className='general-widget'>
            <SlopeChart />
          </div>
          <div className='general-widget'>
            <EducationalTip />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeClean;