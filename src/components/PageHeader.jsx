import React, { useState } from 'react';
import { PageHeader, Button, Input, Drawer, Form, Col, Row, Select, DatePicker, notification, message } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import Setting from './widgets/setting';

const { Search } = Input;
const { Option } = Select;

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
    placement: 'bottomRight',
  });
};

const openInfo = () => {
  message.info('This is a normal message');
};

function CustomPageHeader({ title }) {
  const [visible, setVisible] = useState(false);
  const [childrenVisible, setChildrenVisible] = useState(false);

  const onClose = () => setVisible(false);
  const showDrawer = () => setVisible(true);
  const showChildrenDrawer = () => setChildrenVisible(true);
  const onChildrenClose = () => setChildrenVisible(false);
  return (
    <>
      <PageHeader
        title={title}
        subTitle="This is a subtitle"
        onBack={() => null }
        extra={[
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />,
          <Button key="3">Operation</Button>,
          <Button key="2" onClick={openInfo}>Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
          <Button key='0' icon={<MoreOutlined />} onClick={showDrawer} />,
        ]}
      />
      <Drawer
        title="Profile"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Button type="primary" onClick={showChildrenDrawer}>
            Settings
        </Button>
        <p>Some contents...</p>
        <Button type="primary" onClick={openNotification}>
          Notification
        </Button>,
        <Drawer
          title="Settings"
          width={500}
          closable={false}
          onClose={onChildrenClose}
          visible={childrenVisible}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={onChildrenClose}
                style={{ marginRight: 8 }}
              >
                Cancel
              </Button>
              <Button onClick={onChildrenClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Setting />
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentNode}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </Drawer>
    </>
  )
}

export default CustomPageHeader;
