/*
 * @Date: 2021-09-24 10:27:53
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 12:06:27
 * @FilePath: \yilin-music\src\views\RankingList\index.tsx
 */
import React, { FC,useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

import {rankingApi} from "@/openApi"
import "./index.scss"



const RankingList: FC = () => {

    const {getRankingList} = rankingApi

    // 排行榜列表数据
    const [rankList,setRankList] = useState([])


    // 获取排行榜列表数据
    const getRankList = async () => {
        let res:any = await getRankingList()
        if(res) {
            setRankList(res.list.slice(0,4))
        }
    }

    // 初始化
    useEffect(() => {
        getRankList()
    },[])

    return (
        <div className="rankingList">
            <div className="rank-wrapper">
                <ul>
                    {
                        rankList.map((item:any, index) => {
                            return (
                                <li key={item.id}>
                                    <div className="rank-title">
                                        <div style={{backgroundImage:`url(${item.coverImgUrl})`}}>
                                            <div>
                                                {/* <h2>{item.name}</h2> */}
                                                {/* <p>{item.updateFrequency}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rank-list">
                                        {
                                            item.tracks.map((i:any, ind:number) => {
                                                return (
                                                    <div className="rank-list-item" key={i.id}>
                                                        <div>
                                                            <span className="song-index">{ind + 1}</span>
                                                            <span className="song-name">{i.first}</span>
                                                        </div>
                                                        <div>
                                                            <span className="song-singer">{i.second}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="rank-list-item">
                                            <Link style={{color:"#999"}} to={`/ranking/detail/${item.id}`}>查看全部{" >"}</Link>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default RankingList