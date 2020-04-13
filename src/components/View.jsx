import React, { useState } from 'react';
import faker from 'faker';
import fill from 'lodash/fill';
import { Divider, Button, Skeleton, Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import Widget from './Widget';
import CustomCard from './widgets/card';
import Statistic1 from './widgets/statistic';
import Statistic2 from './widgets/statistic2';
import Timeline from './widgets/timeline';
import ProgressBar from './widgets/progress';

const generateNames = () => {
  const names = fill(Array(8), '');
  return names.reduce((acc, item) => {
    acc.push(faker.name.findName());
    return acc;
  }, [])
}

const cards = generateNames();

const emptyState = {
  visible: false,
  title: '',
}

function View() {
  const [viewState, setViewState] = useState(emptyState);
  
  const showSpecificContent = (name) => setViewState({ visible: true, title: name });
  const hideSpecificContent = () => setViewState(emptyState);

  const { visible, title } = viewState;

  const renderCards = () => {
    return cards.map(card => (
      <Widget
        additionalClasses='widget'
        maxInterval={3000}
        skeleton={
          <Card className='loading-widget'>
            <Skeleton avatar active loading={true} paragraph={{ rows: 3 }} />
          </Card>
        }
      >
        <CustomCard
          title={card}
          onClick={() => showSpecificContent(card)}
        />
        
      </Widget>
    ));
  }

  return (
    <div>
      <PageHeader title={'View'} />
      <div className='double-content'>
        <PageContent additionalClasses='general-content'>
          {renderCards()}
          <div
            className='widget'
            onClick={() => showSpecificContent('statistic 1')}
          >
            <Statistic1 />
          </div>
          <div
            className='widget'
            onClick={() => showSpecificContent('statistic 2')}
          >
            <Statistic2 />
          </div>
        </PageContent>
        {visible &&
          <>
            <Divider type="vertical" />
            <div className='specific-content'>
              <div className='inline'><h2>{title}</h2><Button key='0' icon={<CloseOutlined />} onClick={hideSpecificContent} /></div>
              <ProgressBar />
              <Timeline />
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default View;