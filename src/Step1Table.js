import React from 'react';
import PropTypes from 'prop-types';
import { Table, Space, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';



class Step1Table extends React.Component {

  columns = [
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
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: (_text, _record, index) => (
        <Space size="middle">
          <Button type="primary" shape="circle" danger icon={<CloseOutlined />} onClick={() => this.props.removeItem(index)} />
        </Space>
      ),
    },
  ];

  render() {
    return <Table columns={this.columns} dataSource={this.props.data} />
  }
}

Step1Table.propTypes = {
  data: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default Step1Table;

