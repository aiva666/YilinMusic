/*
 * @Date: 2021-11-23 14:30:48
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-26 11:25:22
 * @FilePath: \yilin-music\src\views\Player\index.tsx
 */
import React, { FC, useState, useEffect } from 'react'
import { Row, Col, Slider, Button } from 'antd'
import CommentBox from '@/Components/CommentBox'
import {PaginationList as CommentList } from '@/Components/CommentList'
import SongTable from '@/Components/SongTable'
import {
    HeartOutlined,
    HeartFilled,
    PlayCircleOutlined,
    PauseCircleOutlined,
    StepBackwardOutlined,
    StepForwardOutlined,
    UnorderedListOutlined,
    RollbackOutlined,
    PlusSquareOutlined,
    RetweetOutlined,
    SwapOutlined,
    BarsOutlined,
    NotificationOutlined,
} from '@ant-design/icons'
import "./index.scss"
const Player: FC = () => {

    const [showPlayList, setShowPlayList] = useState(false)

    // 初始化
    useEffect(() => {
        document.onclick = () => {
            setShowPlayList(false)
        }
    }, [])

    const commitComment = (val: string) => {

    }

    return (
        <div className="player-wrapper">
            <main>
                <header>
                    <h2>Driving Home for Christmas</h2>
                    <p>谢东- 二十世纪原创经典典藏 龙凤金歌榜</p>
                </header>
                <div className="view">
                    <Row gutter={16}>
                        <Col span={10}>
                            <div className="cover">
                                <div className="wrapper-mask">
                                    <div className="wrapper-line">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="cover-img">
                                            <img className={true ? 'isRun' : ''} src="https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg" alt="xxx" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={14}>
                            <div className="lyrics">
                                {
                                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => {
                                        return <p key={item}>{'收到发'.repeat(parseInt((Math.random() * 10) + ''))}</p>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                    <div className="comments">
                        <CommentBox onSubmit={commitComment} />
                        <CommentList />
                    </div>
                </div>

            </main>
            <footer>
                <Row gutter={16}>
                    <Col span={2}>
                        <div className="view-l">
                            <HeartOutlined />
                            <PlusSquareOutlined />
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="view-c">
                            <div className="control">
                                {
                                    true &&
                                    <BarsOutlined />
                                }
                                {
                                    false &&
                                    <RollbackOutlined />
                                }
                                {
                                    false &&
                                    <RetweetOutlined />
                                }
                                {
                                    false &&
                                    <SwapOutlined />
                                }
                                <StepBackwardOutlined />
                                <PauseCircleOutlined />
                                <StepForwardOutlined />
                            </div>
                            <div className="progress-wrapper">
                                <span>00:00</span>
                                <div className="progress">
                                    <Slider
                                        tooltipVisible={false}
                                        defaultValue={30}
                                    />
                                </div>
                                <span>05:21</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="view-r">
                            <div>
                                <NotificationOutlined />
                                <div className="progress">
                                    <Slider
                                        tooltipVisible={false}
                                        defaultValue={30}
                                    />
                                </div>
                            </div>
                            <UnorderedListOutlined onClick={(e) => {
                                if (!showPlayList) {
                                    e.nativeEvent.stopImmediatePropagation()
                                }
                                setShowPlayList(!showPlayList)
                            }} />
                        </div>
                    </Col>
                </Row>
            </footer>

            <section style={{
                display: showPlayList ? "block" : 'none',
            }} className="playList-wrapper">
                <div className="playList">
                    <h2 className="section-title">当前播放</h2>
                    <p className="title-desc">
                        <span>共50首</span>
                        <Button type="link">清空列表</Button>
                    </p>
                    <SongTable data={[]} type="playList" />
                </div>
            </section>
        </div>
    )
}

export default Player