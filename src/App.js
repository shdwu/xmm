import React from 'react';
import './App.css';
import { Steps, Button, message } from 'antd';
import Step1 from './Step1';
import Step2 from './Step2';

const { Step } = Steps;


function App() {
  const [current, setCurrent] = React.useState(0);
  const [step1Data, setStep1Data] = React.useState([]);
  const [step2Data, setStep2Data] = React.useState([]);
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
      content: '生成结果',
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            完成
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
