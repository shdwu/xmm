import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Step2Table from './Step2Table';
import xlsx from 'node-xlsx';
import React from 'react';
import PropTypes from 'prop-types';

const { Dragger } = Upload;



class Step1 extends React.Component {

  parseFile = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = ()=>{
      var fileBuffer = new Uint8Array(fileReader.result);
      var workbook = xlsx.parse(fileBuffer, {type: 'array'})
      const data = workbook[0].data.filter(it => it.length >= 5 && it[0] && it[0] !== '').map(it => {
        return {
          name:it[0],
          nick: it[1],
          phone:it[2],
          maskPhone:it[3],
          zhifubao:it[4]
        }
      })
      this.props.setData(data);
    }
    return false;
  }

  removeItem = (index) => {
    const data = [ ...this.props.data ];
    data.splice(index,1);
    this.props.setData(data);
  }

  render() {
    return (
      <>
        <Dragger name='file'
          accept='.xlsx,xls'
          multiple={true}
          beforeUpload={this.parseFile}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或者将文件拖拽到此上传</p>
        </Dragger>
        <Step2Table data={this.props.data} removeItem={this.removeItem} />
      </>
    )
  }
}

Step1.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired
}


export default Step1;