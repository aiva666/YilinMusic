/*
 * @Date: 2021-11-10 09:00:52
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-18 10:42:49
 * @FilePath: \yilin-music\src\views\Singer\index.tsx
 */
import React, { FC, useState, useEffect, ReactPropTypes } from 'react'
import { Row, Col } from 'antd'
import Card from '@/Components/Card'
import { singer } from '@/openApi/index'
import "./index.scss"

const languageList = [
    {
        title: "全部",
        value: "0",
    },
    {
        title: "华语",
        value: "1",
    },
    {
        title: "欧美",
        value: "2",
    },
    {
        title: "日报",
        value: "3",
    },
    {
        title: "韩国",
        value: "4",
    },
    {
        title: "其他",
        value: "5",
    },
]

const personClass = [
    {
        title: "全部",
        value: "0",
    },
    {
        title: "男歌手",
        value: "1",
    },
    {
        title: "女歌手",
        value: "2",
    },
    {
        title: "乐队组合",
        value: "3",
    },
]

let filterList: any = ["热门", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"]
filterList = filterList.map((item: string) => {
    return {
        title: item,
        value: item === '热门' ? '0' : item
    }
})


const Singer: FC = (props:any) => {
    const { getSingerList } = singer
    const { history } = props

    const [cardList, setCardList] = useState([])


    const [activeLanguage, setActiveLanguage] = useState("0")
    const [activePersonClass, setActivePersonClass] = useState("0")
    const [activeFilterWord, setActiveFilterWord] = useState("0")


    const getSingerData = async () => {
        let res = await getSingerList()
        if (res) {
            setCardList(res.data)
        }
    }

    useEffect(() => {
        getSingerData()

        return () => {
            setCardList([])
        }
    }, [activeLanguage,
        activePersonClass,
        activeFilterWord,])


    return (
        <div className="singer-wrapper">
            <header>
                <ul>
                    <li>
                        <div className="item-l">语种：</div>
                        <div className="item-r">
                            {
                                languageList.map(item => {
                                    return (
                                        <div className={`item-tag ${item.value === activeLanguage ? "active" : ''}`} onClick={() => {
                                            setActiveLanguage(item.value)
                                        }} key={item.value}>
                                            <span>{item.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </li>
                    <li>
                        <div className="item-l">分类：</div>
                        <div className="item-r">
                            {
                                personClass.map(item => {
                                    return (
                                        <div className={`item-tag ${item.value === activePersonClass ? "active" : ''}`} onClick={() => {
                                            setActivePersonClass(item.value)
                                        }} key={item.value}>
                                            <span>{item.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </li>
                    <li>
                        <div className="item-l">筛选：</div>
                        <div className="item-r">
                            {
                                filterList.map((item: any) => {
                                    return (
                                        <div className={`item-tag ${item.value === activeFilterWord ? "active" : ''}`} onClick={() => {
                                            setActiveFilterWord(item.value)
                                        }} key={item.value}>
                                            <span>{item.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </li>
                </ul>
            </header>
            <main>
                <Row gutter={30}>
                    {
                        cardList.map((item: any) => {
                            return (
                                <Col span={4} key={item.id} style={{ marginBottom: 16 }}>
                                    <Card onClick={() => {
                                        history.push('/singer-detail/'+item.id)
                                    }} hideCount title={item.name} image={item.cover} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </main>
        </div>
    )
}

export default Singer