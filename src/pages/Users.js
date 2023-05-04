

import React from 'react'
import { Table, Typography, Space, Button, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [editRow, setEditRow] = useState(null)
    const [form] = Form.useForm();
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const fetchproducts = async () => {

            try {
                const response = await fetch('http://localhost:3001/user');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (formSubmitted) {
            fetchproducts();
            setFormSubmitted(false);
        }
    }, [formSubmitted]);


    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/user');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchproducts();
    }, []);

    const onFinish = async (values) => {
        const updatedDataSource = [...users]
        const index = updatedDataSource.findIndex((user) => user.id === editRow)
        updatedDataSource.splice(index, 1, { ...values, key: editRow })
        setUsers(updatedDataSource)
        setEditRow(null)
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3001/user/${editRow}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem("token"),
                },
                body: JSON.stringify(values),

            });
            if (response.ok) {
                setFormSubmitted(true);
            } else {
                console.error(response.status, response.statusText);
            }
        } catch (error) {
            console.error(error);
        }
    }


    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/user/${userId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: localStorage.getItem("token"),
                }
            });
            if (response.ok) {
                setFormSubmitted(true);
            } else {
                console.error(response.status, response.statusText);
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='center'>
            <Form form={form} onFinish={onFinish}>
                <Space size={20}>
                    <Typography.Title level={4} >ALL USERS</Typography.Title>
                    <Table columns={[
                        {
                            title: "Role",
                            dataIndex: "role",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="role"
                                            rules={[{
                                                required: true,
                                                message: "Please enter user role",
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                } else {
                                    return <p>{text}</p>
                                }
                            }
                        },
                        {
                            title: "User Name",
                            dataIndex: "userName",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="userName"
                                            rules={[{
                                                required: true,
                                                message: "Please enter user name",
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                } else {
                                    return <p>{text}</p>
                                }
                            }
                        },
                        {
                            title: "First Name",
                            dataIndex: "firstName",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="firstName"
                                            rules={[{
                                                required: true,
                                                message: "Please enter first name",
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                } else {
                                    return <p>{text}</p>
                                }
                            }
                        },
                        {
                            title: "Last Name",
                            dataIndex: "lastName",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="lastName"
                                            rules={[{
                                                required: true,
                                                message: "Please enter last name",
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                } else {
                                    return <p>{text}</p>
                                }
                            }
                        },



                        {
                            title: "Email",
                            dataIndex: "email",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="email"
                                            rules={[{
                                                required: true,
                                                message: "Please enter email",
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                } else {
                                    return <p>{text}</p>
                                }
                            }
                        },
                        {
                            title: "Password",
                            dataIndex: "password",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="password"
                                            rules={[{
                                                required: true,
                                                message: "Please enter password",
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                } else {
                                    return <p>{text}</p>
                                }
                            }
                        },
                        {
                            title: "Actions",
                            render: (_, record) => {
                                return <>
                                    <Button type='link' onClick={() => {
                                        setEditRow(record.key);
                                        form.setFieldsValue({
                                            role: record.role,
                                            userName: record.userName,
                                            firstName: record.firstName,
                                            lastName: record.lastName,
                                            email: record.email,
                                            password: record.password

                                        })
                                    }}

                                    ><AiOutlineEdit /></Button>
                                    <Button type='link' htmlType='submit'><AiOutlineSave /></Button>

                                    <Button
                                        type='link'
                                        onClick={() => {
                                            handleDelete(record.key);
                                            form.setFieldsValue({
                                                role: record.role,
                                                userName: record.userName,
                                                firstName: record.firstName,
                                                lastName: record.lastName,
                                                email: record.email,
                                                password: record.password
                                            })
                                        }}
                                    ><AiOutlineDelete /></Button>
                                </>
                            }
                        },
                    ]}
                        dataSource={users.map(user=> ({ key:user.id,role:user.role, userName: user.userName, firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password  }))}
                    >
                    </Table>
                </Space>
            </Form>
        </div>
    )
}

export default Users


