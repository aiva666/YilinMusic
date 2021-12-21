/*
 * @Date: 2021-10-26 10:14:12
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 11:21:16
 * @FilePath: \yilin-music\src\views\LatestMusic\index.tsx
 */
import React, { FC, useState, useEffect } from 'react'

import {latestMusic} from '@/openApi'

import player from '@/assets/images/play-0.png'
import "./index.scss"


const LatestMusic: FC = () => {

    const defaultKey = '0'

    const [activeType, setAcetiveType] = useState(defaultKey)
    const [songList, setSongList] = useState([])

    const typeConfig: typeConfigItemType[] = [
        {
            title: "全部",
            value: "0"
        },
        {
            title: "华语",
            value: "1"
        },
        {
            title: "欧美",
            value: "2"
        },
        {
            title: "韩国",
            value: "3"
        },
        {
            title: "日本",
            value: "4"
        },
    ]

    const getList = async () => {
        let res:any  = await latestMusic.getLatestMusicListByType()
        if(res) {
            setSongList(res.data.slice(0,20))
        }
    }

    useEffect(() => {
        getList()
    },[activeType])

    return (
        <div className="latest-music">
            <header>
                <ul>
                    {
                        typeConfig.map(item => {
                            return <li className={item.value === activeType ? 'active' : ''} key={item.value} onClick={() => {
                                setAcetiveType(item.value)
                            }}>{item.title}</li>
                        })
                    }
                </ul>
            </header>
            <main>
                <ul>
                    {
                        songList.map((item:any,index) => {
                            return <li key={item.id}>
                                <div>
                                    <div className="index">{index + 1}</div>
                                    <div className="song-cover" style={{backgroundImage:`url(${item.album.blurPicUrl})`}}>
                                        <img src={item.album.blurPicUrl} alt={item.name} />
                                    </div>
                                    <div className="song-name">{item.name}</div>
                                    <div className="singer">{'-'}</div>
                                    <div className="song-album">{'-'}</div>
                                    <div className="song-time">{'-'}</div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </main>
        </div>
    )
}


export default LatestMusic