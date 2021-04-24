import React from 'react';
import './App.css';
import { Steps, Button } from 'antd';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import xlsx from 'node-xlsx';

const { Step } = Steps;


function App() {
  const [current, setCurrent] = React.useState(0);
  const [step1Data, setStep1Data] = React.useState([]);
  const [step2Data, setStep2Data] = React.useState([]);
  const [step3Data, setStep3Data] = React.useState([]);
  const steps = [
    {
      title: '第一步: 传入源文件',
      content: <Step1 data={step1Data} setData={setStep1Data} />
    },
    {
      title: '第二步: 传入对比文件',
      content: <Step2 data={step2Data} setData={setStep2Data} />
    },
    {
      title: '第三步: 生成结果',
      content: <Step3 data={step3Data} setData={setStep3Data} />
    },
  ];

  const next = () => {
    if (current === 1) {
      mergeData();
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const mergeData = () => {
    const mergeList = [];
    step1Data.forEach(it => {
      const mergeData = {...it};
      const finded = step2Data.find(fe => fe.name && it.name && fe.name.trim() === it.name.trim())
      if (finded) {
        mergeData.phone = finded.phone
        mergeData.zhifubao = finded.zhifubao
        mergeList.push(mergeData);
      }
    })
    setStep3Data(mergeList);
  }

  const downloadXlsx = () => {
    const data = [['昵称', 'uuid', '姓名', '语音收益', '星挑战+公会奖励',	'实发', '注册手机号','手机号', '支付宝号']];
    step3Data.forEach(it => {
      data.push([it.nick, it.uuid, it.name, it.reward, it.reward, it.factIncome,it.maskPhone, it.phone, it.zhifubao])
    })
    var buffer = xlsx.build([{name: "mySheetName", data: data}]);
    saveExcelFiles(buffer, 'download.xlsx');
  }

  const saveExcelFiles = ( data, fileName, blobType = "application/vnd.ms-excel") => {
    if (!data) {
        return;
    }
    let blob = new Blob([data], {
        type: blobType
    });
    downloadFile(blob, fileName);
  }

  const downloadFile = (stream, fileName, garbledCode = false) => {
    if ('msSaveOrOpenBlob' in navigator) {
      window.navigator.msSaveOrOpenBlob(stream, fileName)
      return
    }
    if (fileName.endsWith('.csv') && garbledCode) stream = '\ufeff' + stream
    let url = window.URL.createObjectURL(new Blob([stream]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => downloadXlsx()}>
            下载
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
