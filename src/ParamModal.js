import { Modal, Form, Select } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const { Option } = Select;

class ParamModal extends React.Component {

  value = 1;

  render() {
    return (
      <Modal
        title="文件解析参数"
        visible={this.props.modalVisible}
        onOk={() => { 
          this.props.toggleModal(false); 
          this.props.setDataStep(this.value)
        }}
        onCancel={() => this.props.toggleModal(false)}
      >
        <Form>
          <Form.Item label="数据起始行">
            <Select defaultValue={1} style={{ width: 120 }} onChange={(value) => this.value = value}>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
              <Option value={6}>6</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

ParamModal.propTypes = {
  setDataStep: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired
}

export default ParamModal;