
import React, { useState } from "react";

import {  Button, Form, Input, Select } from 'antd';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3000/register")
    //    .then(response => response.json())
    //     .then(response => setData(response.message))
    //    .chatch(error => console.log(error))
    //   }, [])

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
        if (data.status === "Logged in") {
            navigate('/admin')
        }
        console.log(data)
    }

    const [form] = Form.useForm();
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

    // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    // const onWebsiteChange = (value) => {
    //     if (!value) {
    //         setAutoCompleteResult([]);
    //     } else {
    //         setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    //     }
    // };
    // const websiteOptions = autoCompleteResult.map((website) => ({
    //     label: website,
    //     value: website,
    // }));


    return (

        <div>
            <div>
                
            </div>
            <h1 className="title-login">Login</h1>
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
    );
};
export default Login;