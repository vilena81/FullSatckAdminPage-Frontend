
import React, { useState } from "react";
import { AutoComplete, Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function Regitration() {

    const navigate = useNavigate()

    async function submitRegister(values) {
        console.log(values, 111)
        const response = await fetch("http://localhost:3001/register", {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json ; charset=UTF-8",
                // Authorization: localStorage.getItem("token"),
            },
        })
        const data = await response.json();
        if (data.message === "User created") {
            localStorage.setItem('user', JSON.stringify(values))
            navigate('/login')
        }
        console.log(data)
    }

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
            xs: { span: 24, },
            sm: { span: 8, },
        },
        wrapperCol: {
            xs: { span: 1124, },
            sm: { span: 16, },
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
    const [form] = Form.useForm();
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));


    return (
        <div className="reg">
            <h2 className="title-reg">User Registration</h2>

            <div className="forma" >

                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={submitRegister}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    style={{

                        maxWidth: 600,
                    }}
                    scrollToFirstError
                >

{/* <Form.Item
                        name="role"
                        label="User Role"
                        rules={[
                            {
                                required: true,
                                message: 'Please input userRole!',
                            },
                        ]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="user name">
                            <Input />
                        </AutoComplete>
                    </Form.Item> */}

                    <Form.Item
                        name="userName"
                        label="User Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input userName!',
                            },
                        ]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="user name">
                            <Input />
                        </AutoComplete>
                    </Form.Item>

                    <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input firstName!',
                            },
                        ]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="first name">
                            <Input />
                        </AutoComplete>
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input lastName!',
                            },
                        ]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="last name">
                            <Input />
                        </AutoComplete>
                    </Form.Item>

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

                    <Form.Item {...tailFormItemLayout} >
                        <Button type="primary" htmlType="submit" >
                            SIGN
                        </Button>

                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
