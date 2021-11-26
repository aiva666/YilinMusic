/*
 * @Date: 2021-11-19 09:26:40
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-23 09:42:47
 * @FilePath: \yilin-music\src\views\Login\index.tsx
 */
import React, { FC, useState, useRef } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { LockOutlined, MobileOutlined, UserOutlined, MailOutlined, } from '@ant-design/icons'
import './index.scss'

const Login = (props: any) => {

    const telRules = [
        {
            required: true,
            validator(_: any, val: string,) {
                if (!val) {
                    return Promise.reject(new Error("请输入手机号码"))
                }

                let reg = /^1\d{10}$/
                if (reg.test(val)) {
                    return Promise.resolve()
                } else {
                    return Promise.reject(new Error("手机号码格式错误"))
                }
            }
        },

    ]

    const commitForm = (val: any) => {
        props.onLogin && props.onLogin({ ...val })
    }

    const registryHandler = () => {
        props.toRegistry && props.toRegistry()
    }

    const resetHandler = () => {
        props.toReset && props.toReset()
    }

    return (
        <Form onFinish={commitForm}>
            <Form.Item name="tel" rules={telRules}>
                <Input type="tel" placeholder="手机号码" allowClear prefix={<MobileOutlined />} />
            </Form.Item>
            <Form.Item name="pwd" rules={[{ required: true, message: "请输入密码" }]}>
                <Input.Password placeholder="密码" allowClear prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
                <div className="form-end">
                    <div>
                        <Checkbox>记住手机号码</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" shape="round" htmlType="submit">登录</Button>
                    </div>
                </div>
            </Form.Item>
            <div className="form-end">
                <div>
                    <span onClick={() => {
                        registryHandler()
                    }}>没有账号？去注册</span>
                </div>
                <div>
                    <span onClick={() => {
                        resetHandler()
                    }}>忘记密码</span>
                </div>
            </div>
        </Form>
    )
}

const Registry = (props: any) => {
    const formRef: any = useRef(null)

    const formRules = {
        tel: [
            {
                required: true,
                validator(_: any, val: string,) {
                    if (!val) {
                        return Promise.reject(new Error("请输入手机号码"))
                    }

                    let reg = /^1\d{10}$/
                    if (reg.test(val)) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error("手机号码格式错误"))
                    }
                }
            },
        ],
        pwd: [
            {
                required: true,
                validator(_: any, val: string,) {
                    if (!val) {
                        return Promise.reject(new Error("请输入密码"))
                    }

                    let reg = /^[a-zA-Z0-9@\._-]{6,16}$/
                    if (reg.test(val)) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error("密码格式错误"))
                    }
                }
            },
        ],
        email: [
            {
                required: true,
                validator(_: any, val: string,) {
                    if (!val) {
                        return Promise.reject(new Error("请输入邮箱"))
                    }

                    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                    if (reg.test(val)) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error("邮箱格式错误"))
                    }
                }
            },
        ],
    }

    const commitForm = (val: any) => {
        if (val.pwd !== val.pwd2) {
            message.warn("两次输入的密码不一致")
            if (formRef.current) {
                formRef.current.setFieldsValue({ pwd: '', pwd2: '' })
            }
            return
        }
        props.onRegistry && props.onRegistry({ ...val })
    }

    return (
        <Form onFinish={commitForm} ref={formRef}>
            <Form.Item name="tel" rules={formRules.tel}>
                <Input type="tel" placeholder="手机号码" allowClear prefix={<MobileOutlined />} />
            </Form.Item>
            <Form.Item name="pwd" rules={formRules.pwd}>
                <Input.Password placeholder="密码" allowClear prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item name="pwd2" rules={formRules.pwd}>
                <Input.Password placeholder="确认密码" allowClear prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item name="email" rules={formRules.email} tooltip="邮箱用于找回密码">
                <Input type="email" placeholder="邮箱" allowClear prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item>
                <div className="form-end">
                    <div>
                        <span onClick={() => {
                            props.toLogin && props.toLogin()
                        }}>返回登录页面</span>
                    </div>
                    <div>
                        <Button type="primary" shape="round" htmlType="submit">注册并登录</Button>
                    </div>
                </div>
            </Form.Item>

        </Form>
    )
}

const RetrievePwd = (props: any) => {
    const formRef: any = useRef(null)

    const formRules = {
        tel: [
            {
                required: true,
                validator(_: any, val: string,) {
                    if (!val) {
                        return Promise.reject(new Error("请输入手机号码"))
                    }

                    let reg = /^1\d{10}$/
                    if (reg.test(val)) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error("手机号码格式错误"))
                    }
                }
            },
        ],
        email: [
            {
                required: true,
                validator(_: any, val: string,) {
                    if (!val) {
                        return Promise.reject(new Error("请输入邮箱"))
                    }

                    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                    if (reg.test(val)) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error("邮箱格式错误"))
                    }
                }
            },
        ],
        pwd: [
            {
                required: true,
                validator(_: any, val: string,) {
                    if (!val) {
                        return Promise.reject(new Error("请输入密码"))
                    }

                    let reg = /^[a-zA-Z0-9@\._-]{6,16}$/
                    if (reg.test(val)) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error("密码格式错误"))
                    }
                }
            },
        ],
    }

    const commitForm = (val: any) => {
        if (val.new_pwd !== val.new_pwd2) {
            message.warn("两次输入的密码不一致")
            if (formRef.current) {
                formRef.current.setFieldsValue({ new_pwd2: '', new_pwd: '' })
            }
            return
        }
        props.onSubmit && props.onSubmit({ ...val })
    }

    return (
        <Form onFinish={commitForm} ref={formRef}>
            <Form.Item name="tel" rules={formRules.tel}>
                <Input type="tel" placeholder="手机号码" allowClear prefix={<MobileOutlined />} />
            </Form.Item>
            <Form.Item name="email" rules={formRules.email}>
                <Input type="email" placeholder="邮箱" allowClear prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item name="old_pwd" rules={formRules.pwd}>
                <Input.Password placeholder="原密码" allowClear prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item name="new_pwd" rules={formRules.pwd}>
                <Input.Password placeholder="新密码" allowClear prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item name="new_pwd2" rules={formRules.pwd}>
                <Input.Password placeholder="确认密码" allowClear prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item>
                <div className="form-end">
                    <div>
                        <span onClick={() => {
                            props.toLogin && props.toLogin()
                        }}>返回登录页面</span>
                    </div>
                    <div>
                        <Button type="primary" shape="round" htmlType="submit">提交</Button>
                    </div>
                </div>
            </Form.Item>

        </Form>
    )
}




const LoginBox: FC = () => {

    const pageTitle: any = {
        "1": "用户登录",
        '2': "用户注册",
        '3': "重置密码",
    }

    // 页面类型
    const [viewType, setViewType] = useState("1")

    return (
        <div className="login-wrapper">
            <h2>{pageTitle[viewType]}</h2>
            <div className="form-box">
                {
                    viewType === '1' && <Login
                        toRegistry={() => {
                            setViewType('2')
                        }}
                        toReset={() => {
                            setViewType('3')
                        }}
                    />
                }

                {
                    viewType === '2' && <Registry
                        onRegistry={(v: any) => {

                        }}
                        toLogin={() => {
                            setViewType('1')
                        }}
                    />
                }

                {
                    viewType === '3' && <RetrievePwd
                        onSubmit={(v: any) => {

                        }}
                        toLogin={() => {
                            setViewType('1')
                        }}
                    />
                }

            </div>
        </div>
    )
}

export default LoginBox