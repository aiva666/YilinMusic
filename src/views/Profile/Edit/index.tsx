/*
 * @Date: 2021-11-23 10:32:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-23 13:06:06
 * @FilePath: \yilin-music\src\views\Profile\Edit\index.tsx
 */
import React, { FC, useRef, } from 'react'
import { Form, Input, Upload, Button, Radio, DatePicker, Cascader, } from 'antd'
import './index.scss'
const EditProfile: FC = () => {
    const formRef: any = useRef(null)

    const formRules = {
        nickname: [
            {
                required: true,
                validator(_: any, val: string,) {
                    if (!val) {
                        return Promise.reject(new Error("请输入昵称"))
                    }
                    let reg = /^[0-9a-zA-Z_@-]{4,20}$/
                    if (reg.test(val)) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error("昵称格式错误"))
                    }
                }
            },
        ],
    }

    const onSave = () => {
        
    }

    return (
        <div>
            <h2 className="section-title">编辑信息</h2>
            <div className="edit-profile-wrapper">
                <section>
                    <Form ref={formRef} onFinish={onSave}>
                        <Form.Item name="nickname" label="昵称" rules={formRules.nickname}>
                            <Input allowClear placeholder="请输入昵称" />
                        </Form.Item>
                        <Form.Item name="introduce" label="介绍" rules={[{ required: true, message: "请输入介绍" }]}>
                            <Input.TextArea rows={4} allowClear placeholder="请输入介绍" />
                        </Form.Item>
                        <Form.Item name="gender" label="性别" rules={[{ required: true, message: "请选择性别" }]}>
                            <Radio.Group>
                                <Radio value={0}>男</Radio>
                                <Radio value={1}>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="birthday" label="生日" rules={[{ required: true, message: "请选择生日" }]}>
                            <DatePicker />
                        </Form.Item>
                        <Form.Item name="address" label="地区" rules={[{ required: true, message: "请选择地区" }]}>
                            <Cascader placeholder="请选择地区" options={[]} />
                        </Form.Item>
                        <Form.Item>
                            <div style={{marginLeft:'4em'}}>
                                <Button type='primary' shape="round">保存</Button>
                                <Button shape="round" style={{marginLeft:10}}>取消</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </section>
                <section>
                    <img src="https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg" alt="Accompany" />
                    <Upload>
                        <Button type="default" shape="round">修改头像</Button>
                    </Upload>
                </section>
            </div>
        </div>
    )
}

export default EditProfile