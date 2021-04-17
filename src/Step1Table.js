import React from 'react';
import { Table, Space, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '昵称',
    dataIndex: 'nick',
    key: 'nick',
  },
  {
    title: 'uuid',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '语音收益',
    dataIndex: 'income',
    key: 'income',
  },
  {
    title: '星挑战+工会奖励',
    dataIndex: 'reward',
    key: 'reward',
  },
  {
    title: '实发',
    dataIndex: 'factIncome',
    key: 'factIncome',
  },
  {
    title: '注册手机号',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '支付宝号',
    dataIndex: 'zhifubao',
    key: 'zhifubao',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" shape="circle" danger icon={<CloseOutlined />} />
      </Space>
    ),
  },
];

class Step1Table extends React.Component {

  render() {
    return <Table columns={columns} dataSource={this.props.data} />
  }
}

export default Step1Table;

