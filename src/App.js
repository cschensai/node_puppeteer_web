import React, { useState, useEffect } from 'react';
import { Card, Tabs } from 'antd';
import Simple from './pages/Simple';
import Advanced from './pages/Advanced';
import DemoList from './pages/Demo';

const { TabPane } = Tabs;



function App() {
  const [type, setType] = useState('simple');
  const [value, setValue] = useState({});
  const handleTabs = key => {
    setType(key);
    setValue({});
  }
 const handleDemo = item => {
   const { type, ...rest } = item;
  setType(type);
  setValue(rest);
 }
  return (
    <div className="App">
      <Card title="在线网页爬虫工具" extra="在线网页抓取工具,基于Puppeteer代码实现爬虫">
        <Tabs tabPosition="left" activeKey={type} onChange={handleTabs}>
          <TabPane tab="简单" key="simple">
            <Simple value={value} />
          </TabPane>
          <TabPane tab="高级" key="advanced">
            <Advanced value={value} />
          </TabPane>
          <TabPane tab="Demo" key="demo">
            <DemoList handleDemo={handleDemo} />
          </TabPane>
          </Tabs>
      </Card>
    </div>
  );
}

export default App;
