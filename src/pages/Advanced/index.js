
import React, { useCallback, useState, Fragment, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import CodeMirrorComp from '../../components/CodeMirror';
import request from '../../utils/request';
const { Item: FormItem } = Form;
const { TextArea } = Input;
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 10 },
};

function Advanced(props) {
  const { value } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const { setFieldsValue } = form;

  useEffect(() => {
    setFieldsValue({
      url: value.url,
      rule: value.rule,
    })
  }, [value])

  const onFinish = useCallback(
    async values => {
      try {
        setLoading(true);
        const data = await request({
          method: 'post',
          url: '/advanced/data',
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
          label="采集规则"
          name="rule"
          rules={[{ required: true, message: '请输入采集规则，标准json格式' }]}
          extra='{"title": ["h3>a","text"],"link": ["h3>a","href"]}'
        >
          <TextArea placeholder="请输入采集规则，标准json格式" />
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
export default Advanced;
