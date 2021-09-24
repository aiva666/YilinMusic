/*
 * @Date: 2021-09-23 09:58:36
 * @LastEditors: Aiva
 * @LastEditTime: 2021-09-24 10:07:49
 * @FilePath: \yilin-music\src\views\Recommended\index.tsx
 */
import React, { useState, useEffect } from 'react';

import { recommendedApi } from '../../openApi'
import { Carousel,Row,Col } from 'antd';
import Card from '../../Components/Card'

import "./index.scss"

const Recommended = () => {

    let { getSwiperList,getCollectionList } = recommendedApi

    const [swiperList, setSwiperList] = useState([])
    const [collection, setCollection] = useState([])

    const getSwiper = async () => {
        let res = await getSwiperList()
        if (res) {
            setSwiperList(res.data)
        }
    }

    const getCollection = async () => {
        let res = await getCollectionList()
        if (res) {
            setCollection(res.data)
        }
    }

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
                                <div key={item.id} className="swiper-item">
                                    <img src={item.image} alt={item.title} />
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
                                    <Card title={item.title} image={item.image} count={item.count} />
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