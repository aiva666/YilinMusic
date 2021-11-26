/*
 * @Date: 2021-11-23 09:48:07
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-23 10:46:32
 * @FilePath: \yilin-music\src\views\Profile\index.tsx
 */
import React, { FC, ProfilerProps } from "react";
import { Button, Row, Col } from 'antd'
import { ManOutlined } from '@ant-design/icons'
import Card from "@/Components/Card";
import './index.scss'

interface TPropsType {
    history:any
}

const Profile:FC<TPropsType> = (props:TPropsType) => {

    return (
        <div className="profile-wrapper rankDetail">
            <header>
                <div className="view-icon">
                    <div style={{ backgroundImage: `url(https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg)` }}></div>
                </div>
                <div className="view-desc">
                    <div className="info-header">
                        <div>
                            <h2>
                                <span className="view-title">Accompany</span>
                            </h2>
                            <div className="info-toolbar">
                                <p>
                                    <span className="info-sex-icon">
                                        {
                                            true ? <ManOutlined style={{ color: "skyblue" }} />
                                                :
                                                <ManOutlined style={{ color: "pink", transform: "rotate(180deg)" }} />
                                        }
                                    </span>
                                    <span className="normal-left">23岁</span>
                                </p>
                                <Button size="small" onClick={() => {
                                    props.history.push("/profile/edit")
                                }}>编辑资料</Button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <span>所在地区：</span>
                        <span>
                            河南省
                        </span>
                        <span>
                            郑州市
                        </span>
                    </div>
                    <div>
                        <span>个人介绍：</span>
                        <span>记载个人心理或行为特点、喜好等的</span>
                    </div>
                </div>
            </header>
            <main>
                <h3>我创建的歌单</h3>
                <Row gutter={16}>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8].map(item => {
                            return <Col key={item} span={4} style={{marginBottom:16}}>
                                <Card title="歌单1111111" image="https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg" />
                            </Col>
                        })
                    }
                </Row>
                <h3>我收藏的歌单</h3>
                <Row gutter={16}>
                    {
                        [0, 1, 2,].map(item => {
                            return <Col key={item} span={4} style={{marginBottom:16}}>
                                <Card title="歌单1111111" image="https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg" />
                            </Col>
                        })
                    }
                </Row>
            </main>
        </div>
    )
}

export default Profile