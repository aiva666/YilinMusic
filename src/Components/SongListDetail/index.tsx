/*
 * @Date: 2021-10-13 15:03:43
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-11 09:26:25
 * @FilePath: \yilin-music\src\Components\SongListDetail\index.tsx
 */
import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tag, Avatar, Button, Tabs, Input, Table } from 'antd'
import { CaretRightOutlined, PlusSquareOutlined, ShareAltOutlined, SearchOutlined,HeartOutlined } from '@ant-design/icons';
import SongTable from '../SongTable'
import { getRankingList } from '../../openApi/index'
import {numberToCapitalString} from '../../utils/index'
import "./index.scss"


const { TabPane } = Tabs;


const SongListDetail: FC = () => {

    let defaultSongListInfo: SongListDetailResponseType = {
        id: "",
        title: "",
        cover_img:"",
        create_data: "",
        create_user_info: {
            avatar:"",
            name:""
        },
        collection_num: 0,
        share_num: 0,
        tags: [],
        songNum: 0,
        play_count: 0,
        desc: "",
        comment_count: 0,
        list: []
    }
    const [songListInfo, setSongListInfo] = useState(defaultSongListInfo)

    

    const getTableData = async () => {
        let res = await getRankingList('xxx')
        if (res) {
            setSongListInfo(res.data)
        }
    }

    useEffect(() => {
        getTableData()
    }, [])


    const rightExtra = (
        <Input style={{ borderRadius: 24 }} placeholder="搜索歌单音乐" allowClear suffix={<SearchOutlined />} />
    )

    return (
        <div className="rankDetail">
            <header>
                <div className="view-icon">
                    <div style={{backgroundImage:`url(${songListInfo.cover_img})`}}></div>
                </div>
                <div className="view-desc">
                    <h2>
                        <Tag color="red">歌单</Tag>
                        <span className="view-title">{songListInfo.title}</span>
                    </h2>
                    <div>
                        <Avatar size="small" />
                        <Link to="/" className="normal-left">{songListInfo.create_user_info.name}</Link>
                        <span className="normal-left">{songListInfo.create_data}创建</span>
                    </div>
                    <div>
                        <Button style={{ background: "#d0344e", boxShadow: "unset", borderColor: "#d0344e" }} type="primary" danger shape="round" icon={<CaretRightOutlined style={{ color: "#fff" }} />}>播放全部</Button>
                        <Button className="normal-left" shape="round" icon={<PlusSquareOutlined />}>已收藏（{numberToCapitalString(songListInfo.collection_num)}）</Button>
                        <Button className="normal-left" shape="round" icon={<ShareAltOutlined />}>分享（{numberToCapitalString(songListInfo.share_num)}）</Button>
                    </div>
                    <div>
                        <span>标签：</span>
                        <span>
                            {
                                songListInfo.tags.map((item,index) => {
                                    return (
                                        <Link to="/" key={item.id}> <i>{index === 0 ? "" : ' / '}</i> {item.title}</Link>
                                    )
                                })
                            }
                        </span>
                    </div>
                    <div>
                        <span>歌曲：{songListInfo.play_count}</span>
                        <span className="normal-left">播放：{numberToCapitalString(songListInfo.play_count)}</span>
                    </div>
                    <div>
                        <span>简介：</span>
                        <span>{songListInfo.desc}</span>
                    </div>
                </div>
            </header>
            <main>
                <Tabs defaultActiveKey="list" tabBarExtraContent={{ right: rightExtra }} >
                    <TabPane tab="歌曲列表" key="list">
                        <SongTable data={songListInfo.list} />
                        {/* <Table className="songListDetail-table" rowClassName="songListDetail-tableRow" rowKey="id" size="small" pagination={false} dataSource={songListInfo.list} columns={tableColumns} /> */}
                    </TabPane>
                    <TabPane tab={`评论（${numberToCapitalString(songListInfo.comment_count)})`} key="comment">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </main>
        </div>
    )
}

export default SongListDetail