/*
 * @Date: 2021-10-26 13:39:54
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 11:08:45
 * @FilePath: \yilin-music\src\views\SongCollection\index.tsx
 */
import React, { FC, useState, useEffect, } from 'react'
import { Button, Row, Col } from 'antd'
import Card from '@/Components/Card'
import { songCollection } from '@/openApi/index'

import "./index.scss"



const SongCollection: FC = () => {

    const { getSongCollectionClass,getSongCollectionById } = songCollection

    const [activeTagId, setActiveTagId] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const defaultTagData:any = {
        languages: [],
        style: [],
        scenario: [],
        emotional: [],
        theme: [],
        hot: [],
    }
    const [tagData, setTagData] = useState(defaultTagData)
    
    const defaultSongCardInfo:songCollectionInfoType = {
        good:{},
        list:[]
    }
    const [songCardInfo, setSongCardInfo] = useState(defaultSongCardInfo)

    // 获取分类
    const getTypeClass = async () => {
        let res:any = await getSongCollectionClass()
        if (res) {
            let obj = {...defaultTagData}
            
            res.tags.forEach((item:any) => {
                if(item.category === 0) {
                    obj.languages.push(item)
                    obj.hot.push(item)
                }else if(item.category === 1) {
                    obj.style.push(item)
                }else if(item.category === 2) {
                    obj.scenario.push(item)
                }else if(item.category === 3) {
                    obj.emotional.push(item)
                }else if(item.category === 4) {
                    obj.theme.push(item)
                }
            })
            setTagData(obj)
            setActiveTagId(res.tags[0]['id'])
        }
    }


    // 获取歌单列表
    const getSongCardList = async (id: string) => {
        let res:any = await getSongCollectionById(id)
        if (res) {
            setSongCardInfo({
                good:res.playlists[0],
                list:res.playlists.slice(1,)
            })
        }
    }


    // 监听tagID改变获取歌单列表
    useEffect(() => {
        if (activeTagId) {
            getSongCardList(activeTagId)
        }
    }, [activeTagId])

    // 初始化
    useEffect(() => {
        getTypeClass()


        document.onclick = () => {
            setShowModal(false)
        }
    }, [])

    return (
        <div className="song-collection">
            <header>
                <div className="header-container">
                    <div className="mask" style={{ backgroundImage: `url(${songCardInfo.good.coverImgUrl})` }}>
                    </div>
                    <div className="cover">
                        <img src={songCardInfo.good.coverImgUrl} alt={songCardInfo.good.name} />
                    </div>
                    <div className="song-card-info">
                        <span className="song-card-flag">
                            <i></i>
                            <span>精品歌单</span>
                        </span>
                        <div>
                            <p className="song-card-title">{songCardInfo.good.name}</p>
                            <p className="song-card-desc">{songCardInfo.good.description}</p>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="main-header clearfix">
                    <Button shape="round" size="small" onClick={(e) => {
                        if (!showModal) {
                            e.nativeEvent.stopImmediatePropagation()
                        }
                        setShowModal(!showModal);
                    }}>全部分类</Button>
                    <div className={`tags-container ${showModal ? 'showModal' : ''}`} onClick={(e) => {
                        e.nativeEvent.stopImmediatePropagation()
                    }}>
                        <ul>
                            <li>
                                <div>
                                    <span>语种</span>
                                </div>
                                <div>
                                    <Row>
                                        {
                                            tagData.languages.map((item: any) => {
                                                return <Col span={4} key={item.id}>
                                                    <span onClick={() => {
                                                        setActiveTagId(item.id)
                                                        setShowModal(false)
                                                    }}>{item.name}</span>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>风格</span>
                                </div>
                                <div>
                                    <Row>
                                        {
                                            tagData.style.map((item: any) => {
                                                return <Col span={4} key={item.id}>
                                                    <span onClick={() => {
                                                        setShowModal(false)
                                                        setActiveTagId(item.id)
                                                    }}>{item.name}</span>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>场景</span>
                                </div>
                                <div>
                                    <Row>
                                        {
                                            tagData.scenario.map((item: any) => {
                                                return <Col span={4} key={item.id}>
                                                    <span onClick={() => {
                                                        setShowModal(false)
                                                        setActiveTagId(item.id)
                                                    }}>{item.name}</span>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>情感</span>
                                </div>
                                <div>
                                    <Row>
                                        {
                                            tagData.emotional.map((item: any) => {
                                                return <Col span={4} key={item.id}>
                                                    <span onClick={() => {
                                                        setShowModal(false)
                                                        setActiveTagId(item.id)
                                                    }}>{item.name}</span>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>主题</span>
                                </div>
                                <div>
                                    <Row>
                                        {
                                            tagData.theme.map((item: any) => {
                                                return <Col span={4} key={item.id}>
                                                    <span onClick={() => {
                                                        setShowModal(false)
                                                        setActiveTagId(item.id)
                                                    }}>{item.name}</span>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="isShowTag-container">
                        {
                            tagData.hot.map((item: any) => {
                                return <span key={item.id} onClick={() => {
                                    setActiveTagId(item.id)
                                }} className={item.id === activeTagId ? 'active' : ''}>{item.name}</span>
                            })
                        }

                    </div>
                </div>
                <div className="main-content">
                    <Row gutter={30}>
                        {
                            songCardInfo.list?.map(item => {
                                return (
                                    <Col span={4} key={item.id} style={{ marginBottom: 16 }}>
                                        <Card title={item.name} image={item.coverImgUrl} count={item.playCount} />
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </div>
            </main>
        </div>
    )
}

export default SongCollection
