import React from 'react';
import { Empty, Skeleton, Spin } from 'antd';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import Widget from './Widget';
import DoughnutChart from './widgets/doughnut';
import ScatterChart from './widgets/scatter';
import PolarChart from './widgets/polar';

function View2() {

  return (
    <div>
      <PageHeader title={'Other View'} />
      <PageContent>
        <Widget
          additionalClasses='charts'
          maxInterval={3000}
          skeleton={
            <div style={{ width: 600, height: 500 }}>
              <Skeleton active paragraph={{ rows: 8 }}/>
            </div>
          }
        >
          <ScatterChart />
        </Widget>
        <Widget
          additionalClasses='charts'
          interval={5000}
          skeleton={
            <div style={{ width: 600, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Spin size="large" />
            </div>
          }
        >
          <Empty
          imageStyle={{ width: 600, height: 400}}
          />
        </Widget>
          <DoughnutChart />
        <Widget
          additionalClasses='charts'
          interval={1500}
          skeleton={
            <div style={{ width: 400, height: 400 }}>
              <Skeleton active paragraph={{ rows: 7 }}/>
            </div>
          }
        >
          <PolarChart />  
        </Widget>
      </PageContent>
    </div>
  )
}

export default View2;