import React from 'react';

import { Form } from 'antd';

const FormItem = Form.Item;

export default props => (
  <FormItem label={props.label} help="" required={false} colon={false}>
    {props.children}
  </FormItem>
);
