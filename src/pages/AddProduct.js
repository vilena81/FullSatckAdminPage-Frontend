// import {Button,Cascader,DatePicker,Form,Input, InputNumber, Radio, Select,Switch,TreeSelect,} from 'antd';
//   import { useState } from 'react';

//   const AddProduct = () => {



    
//     const [componentSize, setComponentSize] = useState('default');
//     const onFormLayoutChange = ({ size }) => {
//       setComponentSize(size);
//     };
//     return (
//         <div>
// <h2>Add Products</h2>

// <Form 
//         labelCol={{
//           span: 15,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//         initialValues={{
//           size: componentSize,
//         }}
//         onValuesChange={onFormLayoutChange}
//         size={componentSize}
//         style={{
//           maxWidth: 900,
//         }}
//       >
//         {/* <Form.Item label="Form Size" name="size">
//           <Radio.Group>
//             <Radio.Button value="small">Small</Radio.Button>
//             <Radio.Button value="default">Default</Radio.Button>
//             <Radio.Button value="large">Large</Radio.Button>
//           </Radio.Group>
//         </Form.Item> */}
//         <Form.Item
//       label="name"
//       name="name"
//     //   rules={[
//     //     {
//     //       required: true,
//     //     },
//     //   ]}
//     >
//       <Input placeholder="  product name" />
//     </Form.Item>

//     <Form.Item label="Price" >
//           <InputNumber placeholder="   price"/>
//         </Form.Item>

//     <Form.Item
//         name="img"
//         label="Img"
//         rules={[
        
//           {
//             type: 'url',
//             warningOnly: true,
//           },
        
//         ]}
//       >
//         <Input placeholder="   for URL image" />
//       </Form.Item>

//       <Form.Item label="Quantity">
//           <InputNumber placeholder="   quantity"/>
//         </Form.Item>

//         {/* <Form.Item label="Input">
//           <Input />
//         </Form.Item> */}

//         <Form.Item label="CategoryId">
//           <Select placeholder="  products category">
//             <Select.Option value="demo">Environmental technology</Select.Option>
//             <Select.Option value="demo">Phone</Select.Option>
//             <Select.Option value="demo">Computers</Select.Option>
//             <Select.Option value="demo">Electronics</Select.Option>
//             <Select.Option value="demo">Kitchen technology</Select.Option>
//             <Select.Option value="demo">Phone2</Select.Option>
//             <Select.Option value="demo">Phone3</Select.Option>
//           </Select>
//         </Form.Item>
        
        
//         <Form.Item label="DatePicker">
//           <DatePicker />
//         </Form.Item>
        
//         {/* <Form.Item label="Switch" valuePropName="checked">
//           <Switch />
//         </Form.Item> */}
//         <Form.Item label="Button">
//           <Button value="default">Button</Button>
//         </Form.Item>
//       </Form>
//         </div>
      
//     );
//   };
//   export default AddProduct;

import {Button, Form,Input} from "antd";
import React ,{ useState, useForm } from "react";
    
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
  const AddProduct = () => {
    const [form] = Form.useForm();

    async function addProduct(value) {
      console.log(value);
      const token = localStorage.getItem('token');
      try {
        const response = await fetch("http://localhost:3001/products", {
          method: 'POST',
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json ; charset=UTF-8",
            Authorization: token,
          },

        });
    
        const data = await response.json();
        
        if (data.status === "Product Created") {
           const successMessage = document.getElementById("success-message");
        successMessage.textContent = "Product created successfully!";
        }
      } catch (error) {
        console.log("An error occurred while creating the product:", error);
      }

value('')

    }
    
    
    return (
      <div  className="addprod">
        <div >
      <Form
      id="success-message"
        {...formItemLayout}
        form={form}
        name="addproduct"
        onFinish={addProduct}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <h1>Add Product</h1>
      <Form.Item
          name="name"
          label="Product Name"
          rules={[
            {
              message: "Please input your product name!",
              whitespace: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>
  
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              message: "Please input your product's price!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        name="img"
        label="Img"
        rules={[
          {
            type: 'url',
            warningOnly: true,
          },
        
        ]}
      >
        <Input placeholder="   for URL image" />
      </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            {
              message: "Please input product's quantity",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="categoryId"
          label="Category ID"
          rules={[
            {
              message: "Please input your Category ID !",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
    );
  };
  export default AddProduct;

