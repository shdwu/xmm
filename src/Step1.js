import { Upload, Button, Modal } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Step1Table from './Step1Table';
import xlsx from 'node-xlsx';
import React from 'react';

const { Dragger } = Upload;



class Step1 extends React.Component {

  originData = [];

  constructor() {
    super();
    this.state = {
      data: [],
      dataStep: 0,
      modalVisible: true,
    }
  }

  diaggerProps = {
    name: 'file',
    accept: '.xlsx,xls',
    multiple: true,
    beforeUpload: this.beforeUploadFn
  }

  beforeUploadFn = async (file) => {
    console.log('123')
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      var data = new Uint8Array(e.target.result);
      var workbook = xlsx.parse(data, {type: 'array'});
      this.setState({ modalVisible: true })
    };
    return false;
  }

  render() {
    return (
      <>
        <Dragger {...this.diaggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或者将文件拖拽到此上传</p>
        </Dragger>
        <Modal
          title="选择数据起始行"
          visible={this.state.modalVisible}
          onOk={() => this.setState({modalVisible: false})}
        ></Modal>
        <Step1Table data={this.state.data} dataStep={this.state.dataStep} />
      </>
    )
  }
}



export default Step1;