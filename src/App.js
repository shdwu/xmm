import React from 'react';
import './App.css';
import { Steps, Button, message } from 'antd';
import Step1 from './Step1';

const { Step } = Steps;

const steps = [
  {
    title: '第一步: 传入源文件',
    content: <Step1 />
  },
  {
    title: '第二步',
    content: '传入比对文件',
  },
  {
    title: '第三步',
    content: '生成结果',
  },
];

function App() {
  const [current, setCurrent] = React.useState(0);

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
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
