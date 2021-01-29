
import React, { useCallback, useState, Fragment, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import CodeMirrorComp from '../../components/CodeMirror';
import request from '../../utils/request';
const { Item: FormItem } = Form;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 10 },
};

function Simple(props) {
  const { value } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const { setFieldsValue } = form;
  useEffect(() => {
    setFieldsValue({
      url: value.url,
      selector: value.selector,
      attr: value.attr,
    })
  }, [value])
  const onFinish = useCallback(
    async values => {
      try {
        setLoading(true);
        const data = await request({
          method: 'post',
          url: '/simple/data',
          params: values,
        })
        setLoading(false);
        setData(data || []);
      } catch (error) {
        console.log('error', error);
        setLoading(false);
      }
    },
    []
  )

  return (
    <Fragment>
      <Form {...layout} onFinish={onFinish} form={form}>
        <FormItem
          label="URL"
          name="url"
          rules={[{ required: true, message: '请输入url' }]}
        >
          <Input placeholder="请输入url" />
        </FormItem>
        <FormItem
          label="选择器"
          name="selector"
          rules={[{ required: true, message: '请输入选择器' }]}
        >
          <Input placeholder="请输入选择器" />
        </FormItem>
        <FormItem
          label="属性"
          name="attr"
          rules={[{ required: true, message: '请输入属性' }]}
        >
          <Input placeholder="请输入属性" />
        </FormItem>
        <FormItem {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            执行
          </Button>
        </FormItem>
      </Form>
      <CodeMirrorComp value={JSON.stringify(data, null, 2)} />
    </Fragment>
  )
}
export default Simple;