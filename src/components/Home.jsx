import React from 'react';
import { Skeleton } from 'antd';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import Widget from './Widget';
import DoughnutWithTextChart from './widgets/doughnutWithText';
import ProgressWithTextChart from './widgets/progressWithText';
import SlopeChart from './widgets/slope';
import EducationalTip from './widgets/educationalTip';

function Home() {
  return (
    <div>
      <PageHeader title={'Home'} />
      <div className='double-content'>
        <PageContent additionalClasses='even-content'>
          <Widget
            additionalClasses='charts'
            maxInterval={3000}
            skeleton={
              <div style={{ width: '600px', height: '500px' }}>
                <Skeleton active paragraph={{ rows: 8 }}/>
              </div>
            }
          >
            <DoughnutWithTextChart />
          </Widget>  
        </PageContent>
        <div className='even-content widget-container'>
          <Widget
            additionalClasses='general-widget'
            maxInterval={2000}
            skeleton={
              <div style={{ width: '600px', height: '100px' }}>
                <Skeleton active paragraph={{ rows: 2 }}/>
              </div>
            }
          >
            <ProgressWithTextChart />
          </Widget>
          <Widget
            additionalClasses='general-widget'
            maxInterval={2000}
            skeleton={
              <div style={{ width: '600px', height: '100px' }}>
                <Skeleton active paragraph={{ rows: 2 }}/>
              </div>
            }
          >
            <SlopeChart />
          </Widget>
          <Widget
            additionalClasses='general-widget'
            maxInterval={2000}
            skeleton={
              <div style={{ width: '600px', height: '400px' }}>
                <Skeleton active paragraph={{ rows: 5 }}/>
              </div>
            }
          >
            <EducationalTip />
          </Widget>
        </div>
      </div>
    </div>
  )
}

export default Home;