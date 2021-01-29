import React from 'react';
import { List, Button } from 'antd';
import DEMO_LIST from '../../utils/enum';
const { Item: ListItem } = List;

function DemoList(props) {
  const { handleDemo } = props;

  return (
    <List
      header={<h3>Demo 网站</h3>}
      bordered
      dataSource={DEMO_LIST}
      renderItem={item => (
        <ListItem>
          <Button type="link" onClick={() => handleDemo(item)}>{item.url}</Button>
        </ListItem>
      )}
    />
  )
}

export default DemoList;

