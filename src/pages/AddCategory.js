import { Form, Button, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';



const AddCategory = () => {
const navigate = useNavigate() 

async function addCategory(values) {

   
  console.log(values)
  const response = await fetch("http://localhost:3001/category", {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
          "Content-Type": "application/json ; charset=UTF-8",
      },
  })
  const data = await response.json();
  console.log(data)
  navigate('/category')
  if (response.status !==201) {
   
  }
  console.log(data)
}
const [form] = Form.useForm()

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrRegistererCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrRegistererCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  return(
   
<div  className="registerCont">
      <div className="category">
    <Form
    id="success-message"
      {...formItemLayout}
      form={form}
      name="category"
      onFinish={ addCategory}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <h1>Add Category</h1>
    <Form.Item
        name="name"
        label="Category Name"
        tooltip="What is category name?"
        rules={[
          {
            required: true,
            message: "Please input category name!",
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Category
        </Button>
      </Form.Item>
    </Form>
    </div>
  </div>

  )

}
export default AddCategory