
// import React, { useState } from "react";

// import { AutoComplete, Button, Form, Input, Select } from 'antd';
// import { Link } from "react-router-dom";

// const { Option } = Select;
// const residences = [
//     {
//         value: 'zhejiang',
//         label: 'Zhejiang',
//         children: [
//             {
//                 value: 'hangzhou',
//                 label: 'Hangzhou',
//                 children: [
//                     {
//                         value: 'xihu',
//                         label: 'West Lake',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         value: 'jiangsu',
//         label: 'Jiangsu',
//         children: [
//             {
//                 value: 'nanjing',
//                 label: 'Nanjing',
//                 children: [
//                     {
//                         value: 'zhonghuamen',
//                         label: 'Zhong Hua Men',
//                     },
//                 ],
//             },
//         ],
//     },
// ];
// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 8,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 1124,
//         },
//         sm: {
//             span: 16,
//         },
//     },
// };
// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//             span: 24,
//             offset: 0,
//         },
//         sm: {
//             span: 16,
//             offset: 8,
//         },
//     },
// };
// const Register = () => {

//     const [data, setData] = useState([]);
//     const [email, setEmail] = useState('');
//     const [userName, setUserName] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [password, setPassword] = useState('');

//     // useEffect(() => {
//     //     fetch("http://localhost:3001/register")
//     //         .then(response => response.json())
//     //         .then(response => setData(response.message))
//     //         .catch(error => console.log(error))
//     // }, [])


//     const [form] = Form.useForm();
//     const onFinish = (values) => {
//         console.log('Received values of form: ', values);
//     };
//     async function submitRegister(e) {
//         e.preventDefault();
//         const response = await fetch("https://localhost:3001/register", {
//             method: 'POST',
//             body: JSON.stringify({
//                 userName,
//                 firstName,
//                 lastName,
//                 email,
//                 password
//             }),
//             headers: {
//                 "Content-Type": "application/json ; charset=UTF-8",
//             },
//         })

//         const data = await response.json();
//         if (data.message === "User created") {
//             navigate('/login')
//         }
//         console.log(data)

//         const [autoCompleteResult, setAutoCompleteResult] = useState([]);
//         const onWebsiteChange = (value) => {
//             if (!value) {
//                 setAutoCompleteResult([]);
//             } else {
//                 setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
//             }
//         };
//         const websiteOptions = autoCompleteResult.map((website) => ({
//             label: website,
//             value: website,
//         }));
    

//     return (


//         <div className="reg">
//             <div>
//                 <Link to='/'>Home</Link>
//             </div>
//             <h2 className="title-reg">Registration</h2>
//             <Form
//                 onSubmit={submitRegister}
//                 {...formItemLayout}
//                 form={form}
//                 name="register"
//                 onFinish={onFinish}
//                 initialValues={{
//                     residence: ['zhejiang', 'hangzhou', 'xihu'],
//                     prefix: '86',
//                 }}
//                 style={{
//                     maxWidth: 600,
//                 }}
//                 scrollToFirstError
//             >
//                 <Form.Item
//                     name="email"
//                     label="E-mail"
//                     rules={[
//                         {
//                             type: 'email',
//                             message: 'The input is not valid E-mail!',
//                         },
//                         {
//                             required: true,
//                             message: 'Please input your E-mail!',
//                         },
//                     ]}
//                 >
//                     <Input onChange={(e) => setEmail(e.target.value)} />
//                 </Form.Item>

//                 <Form.Item
//                     name="User Name"
//                     label="User Name"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input website!',
//                         },
//                     ]}
//                 >
//                     <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="user name">
//                         <Input onChange={(e) => setUserName(e.target.value)} />
//                     </AutoComplete>
//                 </Form.Item>

//                 <Form.Item
//                     name="First Name"
//                     label="First Name"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input website!',
//                         },
//                     ]}
//                 >
//                     <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="first name">
//                         <Input onChange={(e) => setFirstName(e.target.value)} />
//                     </AutoComplete>
//                 </Form.Item>

//                 <Form.Item
//                     name="Last Name"
//                     label="Last Name"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input website!',
//                         },
//                     ]}
//                 >
//                     <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="last name">
//                         <Input onChange={(e) => setLastName(e.target.value)} />
//                     </AutoComplete>
//                 </Form.Item>

//                 <Form.Item
//                     name="password"
//                     label="Password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                     ]}
//                     hasFeedback
//                 >
//                     <Input.Password onChange={(e) => setPassword(e.target.value)} />
//                 </Form.Item>

//                 <Form.Item {...tailFormItemLayout} >
//                     <Button type="primary" htmlType="submit" >
//                         Register
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     );

// }

// export default Register


