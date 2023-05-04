
import React from 'react'
import { Table, Typography, Space, Button, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai'

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [editRow, setEditRow] = useState(null)
    const [form] = Form.useForm();
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const fetchproducts = async () => {

            try {
                const response = await fetch('http://localhost:3001/category');
                const data = await response.json();
                setCategories(data);
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
                const response = await fetch('http://localhost:3001/category');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchproducts();
    }, []);

    const onFinish = async (values) => {
        const updatedDataSource = [...categories]
        const index = updatedDataSource.findIndex((user) => user.id === editRow)
        updatedDataSource.splice(index, 1, { ...values, key: editRow })
        setCategories(updatedDataSource)
        setEditRow(null)

        try {
            const response = await fetch(`http://localhost:3001/category/${editRow}`, {
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


    const handleDelete = async (categoryId) => {
        try {
            const response = await fetch(`http://localhost:3001/category/${categoryId}`, {
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
            <Form form={form}
                onFinish={onFinish}>
                <Space size={20}>
                    <Typography.Title level={4} >Categories</Typography.Title>
                    <Table columns={[
                        {
                            title: "Category Id",
                            dataIndex: "id",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="id"
                                            rules={[{
                                                required: true,
                                                message: "Please enter category id",
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
                            title: "Category Name",
                            dataIndex: "name",
                            render: (text, record) => {
                                if (editRow === record.key) {
                                    return (
                                        <Form.Item
                                            name="name"
                                            rules={[{
                                                required: true,
                                                message: "Please enter category name",
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
                                            id:record.id,
                                            name: record.name

                                        })
                                    }}

                                    ><AiOutlineEdit /></Button>
                                    <Button type='link' htmlType='submit'><AiOutlineSave /></Button>

                                    <Button
                                        type='link'
                                        onClick={() => {
                                            handleDelete(record.id);
                                            form.setFieldsValue({
                                                id:record.id,
                                                name: record.id
                                            })
                                        }}
                                    ><AiOutlineDelete /></Button>
                                </>
                            }
                        },
                    ]}
                        dataSource={categories.map(category => ({  key: category.id, id:category.id, name:category.name }))}
                    >
                    </Table>
                </Space>
            </Form>
        </div>
    )
}

export default Category


