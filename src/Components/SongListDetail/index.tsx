/*
 * @Date: 2021-10-13 15:03:43
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-18 13:52:29
 * @FilePath: \yilin-music\src\Components\SongListDetail\index.tsx
 */
import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tag, Avatar, Button, Tabs, Input, Table } from 'antd'
import { CaretRightOutlined, PlusSquareOutlined, ShareAltOutlined, SearchOutlined, HeartOutlined } from '@ant-design/icons';
import SongTable from '../SongTable'
import CommentBox from '../CommentBox';
import { PaginationList, LoadMoreList } from '../CommentList'
import { getRankingList, getCommentList } from '../../openApi/index'
import { numberToCapitalString } from '../../utils/index'
import "./index.scss"

const { TabPane } = Tabs;

const SongListDetail: FC = () => {

    const defaultKey: string = 'list'
    const [activeKey, setActiveKey] = useState(defaultKey)
    const defaultSongListInfo: SongListDetailResponseType = {
        id: "",
        title: "",
        cover_img: "",
        create_data: "",
        create_user_info: {
            avatar: "",
            name: ""
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
    const defaultCommentList: commentListItemType[] = []
    const [latestCommentList, setLatestCommentList] = useState(defaultCommentList)
    const [hotCommentList, setHotCommentList] = useState(defaultCommentList)
    const [latestCommentTotal, setLatestCommentTotal] = useState(0)
    const [showHotComment, setShowHotcomment] = useState(true)

    useEffect(() => {
        const reqMap: any = {
            'list': getTableData,
            'comment': getCommentData
        }
        if (activeKey) {
            reqMap[activeKey]()
        }
    }, [activeKey])


    const getTableData = async () => {
        let res = await getRankingList('xxx')
        if (res) {
            setSongListInfo(res.data)
        }
    }

    const getCommentData = async (page: number = 1) => {
        let res = await getCommentList('xxx')
        if (res) {
            console.log(res)
            setLatestCommentList(res.data.latest)
            setHotCommentList(res.data.hot)
            setLatestCommentTotal(res.data.total)
            if(document) {
                let dom = document.querySelector('.view-wrapper')
                if(dom) {
                    dom.scrollTop = 0
                }
                
            }
        }
    }

    const commentPageChange = (page: number) => {
        if (page > 1) {
            setShowHotcomment(false)
        } else {
            setShowHotcomment(true)
        }
        getCommentData(page)
    }


    const rightExtra = (
        <Input style={{ borderRadius: 24 }} placeholder="搜索歌单音乐" allowClear suffix={<SearchOutlined />} />
    )

    return (
        <div className="rankDetail">
            <header>
                <div className="view-icon">
                    <div style={{ backgroundImage: `url(${songListInfo.cover_img})` }}></div>
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
                                songListInfo.tags.map((item, index) => {
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
                <Tabs activeKey={activeKey} onChange={(k) => {
                    setActiveKey(k)
                }} tabBarExtraContent={{ right: rightExtra }} >
                    <TabPane tab="歌曲列表" key="list">
                        <SongTable data={songListInfo.list} />
                        {/* <Table className="songListDetail-table" rowClassName="songListDetail-tableRow" rowKey="id" size="small" pagination={false} dataSource={songListInfo.list} columns={tableColumns} /> */}
                    </TabPane>
                    <TabPane tab={`评论（${numberToCapitalString(songListInfo.comment_count)})`} key="comment">
                        <div>
                            <CommentBox />
                        </div>
                        <div>
                            {/* {showHotComment ? <LoadMoreList data={hotCommentList} onChange={commentPageChange} /> : null} */}
                            {
                                showHotComment ?
                                    <div>
                                        <h3>热门评论</h3>
                                        <PaginationList data={hotCommentList} page={false} />
                                    </div>
                                    : null
                            }
                            <div style={{ marginTop: 16 }}>
                                <h3>最新评论</h3>
                                <PaginationList data={latestCommentList} onChange={commentPageChange} total={latestCommentTotal} />
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </main>
        </div>
    )
}

export default SongListDetail