/*
 * @Date: 2021-10-13 15:03:43
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-13 16:36:20
 * @FilePath: \yilin-music\src\Components\SongListDetail\index.tsx
 */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Tag, Avatar, Button, Tabs,Input,Table } from 'antd'
import { CaretRightOutlined, PlusSquareOutlined, ShareAltOutlined,SearchOutlined } from '@ant-design/icons';

import "./index.scss"

const { TabPane } = Tabs;


const rankDetail: FC = () => {

    const tableColumns = [
        {
            title:"",
            dataIndex:'index',
            width:50,
        },
        {
            title:"操作",
            dataIndex:'action',
            width:60,
        },
        {
            title:"标题",
            dataIndex:'song_name',
        },
        {
            title:"歌手",
            dataIndex:'song_singer',
        },
        {
            title:"专辑",
            dataIndex:'song_album',
        },
        {
            title:"时间",
            dataIndex:'song_time',
        },
        
    ]

    const rightExtra = (
        <Input style={{borderRadius:24}}  placeholder="搜索歌单音乐" allowClear suffix={<SearchOutlined />} />
    )

    return (
        <div className="rankDetail">
            <header>
                <div className="view-icon">
                    <div>
                        <span>热歌榜</span>
                    </div>
                </div>
                <div className="view-desc">
                    <h2>
                        <Tag color="red">歌单</Tag>
                        <span className="view-title">热歌榜</span>
                    </h2>
                    <div>
                        <Avatar size="small" />
                        <Link to="/" className="normal-left">网易云音乐</Link>
                        <span className="normal-left">2020-01-02创建</span>
                    </div>
                    <div>
                        <Button style={{ background: "#d0344e", boxShadow: "unset", borderColor: "#d0344e" }} type="primary" danger shape="round" icon={<CaretRightOutlined style={{ color: "#fff" }} />}>播放全部</Button>
                        <Button className="normal-left" shape="round" icon={<PlusSquareOutlined />}>已收藏（2万）</Button>
                        <Button className="normal-left" shape="round" icon={<ShareAltOutlined />}>分享（2万）</Button>
                    </div>
                    <div>
                        <span>标签：</span>
                        <span>
                            <Link to="/">华语</Link>
                            <span> / </span>
                            <Link to="/">粤语</Link>
                            <span> / </span>

                            <Link to="/">经典</Link>
                        </span>
                    </div>
                    <div>
                        <span>歌曲：99</span>
                        <span className="normal-left">播放：60万</span>
                    </div>
                    <div>
                        <span>简介：</span>
                        <span>云音乐中每天热度上升最快的100首单曲，每日更新。</span>
                    </div>
                </div>
            </header>
            <main>
                <Tabs defaultActiveKey="list" tabBarExtraContent={{right:rightExtra}} >
                    <TabPane tab="歌曲列表" key="list">
                        <Table dataSource={[]} columns={tableColumns} />
                    </TabPane>
                    <TabPane tab="评论（20170613）" key="comment">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </main>
        </div>
    )
}

export default rankDetail