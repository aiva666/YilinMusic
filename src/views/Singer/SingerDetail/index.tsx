/*
 * @Date: 2021-11-10 10:37:42
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-11 10:26:00
 * @FilePath: \yilin-music\src\views\Singer\SingerDetail\index.tsx
 */
import React, { FC, useEffect, useState } from "react";
import { Button, Tabs, } from 'antd'
import SongTable from '../../../Components/SongTable'
import { PlusSquareOutlined, UserOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { numberToCapitalString } from '../../../utils'
import { singer } from '../../../openApi'
import "./index.scss"

const { TabPane } = Tabs

const SingerDetail: FC = (props: any) => {
    const { getSingeInfo } = singer
    const { match } = props
    const { params } = match
    const { id } = params
    let defaultSingerInfo = {
        id: '',
        cover_img: "",
        name: "",
        song_count: 0,
        album_count: 0,
        list: [],
    }

    const [singerInfo, setSingerInfo] = useState(defaultSingerInfo)


    const getSingerDetail = async (id: string) => {
        let res = await getSingeInfo()

        if (res) {
            console.log(res)
            setSingerInfo(res.data)
        }
    }

    useEffect(() => {
        getSingerDetail(id)
    }, [])


    return (

        <div className="singerDetail">
            <header>
                <div className="view-icon">
                    <div style={{ backgroundImage: `url(${singerInfo.cover_img})` }}></div>
                </div>
                <div className="view-desc">
                    <h2>
                        <span className="view-title">{singerInfo.name}</span>
                    </h2>

                    <div>
                        <Button shape="round" icon={<PlusSquareOutlined />}>收藏</Button>
                        <Button className="normal-left" shape="round" icon={<UserOutlined />}>个人主页</Button>
                    </div>

                    <div>
                        <span>单曲数：{numberToCapitalString(singerInfo.song_count)}</span>&emsp;
                        <span className="normal-left">专辑数：{numberToCapitalString(singerInfo.album_count)}</span>&emsp;
                    </div>

                </div>
            </header>
            <main>
                <Tabs defaultActiveKey="list">
                    <TabPane tab="专辑" key="list">
                        <ul className="album">
                            {
                                singerInfo.list.map((item:any) => {
                                    return <li key={item.id}>
                                        <div className="l-img">
                                            <img src="https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg" alt="" />
                                            <p>{item.release_time}</p>
                                        </div>
                                        <div className="r-list">
                                            <div>
                                                <span className="title">{item.title}</span>
                                                <PlusSquareOutlined />
                                                <PlayCircleOutlined />
                                            </div>
                                            <SongTable data={item.data || []} type="singer" />
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </TabPane>
                    <TabPane tab="歌手详情" key="singer-desc">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </main>
        </div>
    )
}

export default SingerDetail