/*
 * @Date: 2021-11-18 14:09:31
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-18 14:53:05
 * @FilePath: \yilin-music\src\views\MineCollection\index.tsx
 */
import React, { FC, useEffect, useState } from "react";
import { Tabs, Row, Col } from 'antd'
import Card from "@/Components/Card"
import { myCollection } from '@/openApi'
import './index.scss'

const { TabPane } = Tabs
const { getAlbum, getSinger } = myCollection

const MineCollection: FC = () => {

    const [acriveKey, setActiveKey] = useState('album')
    const [albumList, setAlbumList] = useState([])
    const [singerList, setSingerList] = useState([])

    const getAlbumData = async () => {
        let res = await getAlbum()
        if (res) {
            setAlbumList(res.data)
        }
    }

    const getSingerData = async () => {
        let res = await getSinger()
        if (res) {
            setSingerList(res.data)
        }
    }

    useEffect(() => {
        const reqMap: any = {
            "album": getAlbumData,
            "singer": getSingerData,
        }
        if (acriveKey) {
            reqMap[acriveKey]()
        }

    }, [acriveKey])


    return (
        <div className="mineCollection">
            <Tabs activeKey={acriveKey} onChange={(k: string) => {
                setActiveKey(k)
            }}>
                <TabPane tab="专辑" key="album">
                    <Row gutter={16}>
                        {
                            albumList.map((item: any) => {
                                return <Col span={4} key={item.id} style={{marginBottom:16}}>
                                    <Card title={item.title} hideCount image={item.image} />
                                </Col>
                            })
                        }
                    </Row>
                </TabPane>
                <TabPane tab="歌手" key="singer">
                    <Row gutter={16}>
                        {
                            singerList.map((item: any) => {
                                return <Col span={4} key={item.id} style={{marginBottom:16}}>
                                    <Card title={item.title} hideCount image={item.image} />
                                </Col>
                            })
                        }
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MineCollection