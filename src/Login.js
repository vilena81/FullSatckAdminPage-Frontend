
import React, { useState } from "react";
import {  Button, Form, Input, Select } from 'antd';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {
   

    const { Option } = Select;
    const residences = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 1124,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
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

    const navigate = useNavigate()
    async function submitLogin(values) {
        console.log(values, 111)
        const response = await fetch("http://localhost:3001/login", {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json ; charset=UTF-8",
            },
        })
        const data = await response.json();
        localStorage.setItem('token',data.jwt);
        if (data.status === "Logged in") {
            navigate('/admin')
        }
        console.log(data)
    }

    const [form] = Form.useForm();
   
    return (

        <div className="reg">
           
            <h1 className="title-reg">Login</h1>
            <div className="forma" >
            <Form
                {...formItemLayout}
                form={form}
                name="login"
                onFinish={submitLogin}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    );
};
export default Login;