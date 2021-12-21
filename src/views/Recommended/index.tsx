/*
 * @Date: 2021-09-23 09:58:36
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 11:15:29
 * @FilePath: \yilin-music\src\views\Recommended\index.tsx
 */
import React, { useState, useEffect } from 'react';

import { recommendedApi } from '@/openApi'
import { Carousel,Row,Col, } from 'antd';
import Card from '@/Components/Card'

import "./index.scss"

const Recommended = () => {

    let { getSwiperList,getCollectionList } = recommendedApi

    // 轮播图数据
    const [swiperList, setSwiperList] = useState([])

    // 推荐歌单数据
    const [collection, setCollection] = useState([])

    // 获取轮播图数据
    const getSwiper = async () => {
        let res:any = await getSwiperList()
        if (res) {
            setSwiperList(res.banners)
        }
    }

    // 获取推荐歌单数据
    const getCollection = async () => {
        let res:any = await getCollectionList()
        if (res) {
            setCollection(res.result)
        }
    }

    // 页面数据初始化
    useEffect(() => {
        getSwiper()
        getCollection()
    }, [])

    return (
        <div>
            <header>
                <Carousel autoplay>
                    {
                        swiperList.map((item:any) => {
                            return (
                                <div key={item.targetId} className="swiper-item">
                                    <img src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                            )
                        })
                    }

                </Carousel>
            </header>
            <section style={{marginTop:16}}>
                <h2 className="section-title">推荐歌单</h2>
                <Row gutter={30}>
                    {
                        collection.map((item:any) => {
                            return (
                                <Col span={4} key={item.id} style={{marginBottom:16}}>
                                    <Card title={item.name} image={item.picUrl} count={item.playCount} />
                                </Col>
                            )
                        })
                    }

                </Row>
            </section>
        </div>
    )
}

export default Recommended