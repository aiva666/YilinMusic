/*
 * @Date: 2021-11-18 14:09:31
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 13:34:33
 * @FilePath: \yilin-music\src\views\History\index.tsx
 */
import React, { FC, useEffect, useState } from "react";
import { Button } from 'antd'
import {PlayCircleOutlined} from '@ant-design/icons';
import SongTable from '@/Components/SongTable'
import {getHistory} from '@/openApi/index'
import './index.scss'
const Histroy: FC = () => {

    const [list,setList] = useState([])

    const getData = async () => {
        let res = await getHistory()

        if(res) {
            setList(res.data.list.map((item:any) => {
                return {
                    ...item.data
                }
            }))
        }
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div className="history">
            <header>
                <h2 className="section-title">最近播放</h2>
                <p className="head-desc">最近播放的100首音乐</p>
                <div className="btn-wrap">
                    <Button type="primary" shape="round" icon={<PlayCircleOutlined style={{color:'#fff'}} />}>播放全部</Button>
                    <Button type="default">清空列表</Button>
                </div>
            </header>
            <main>
                <SongTable data={list} type="simple" />
            </main>
        </div>
    )
}

export default Histroy