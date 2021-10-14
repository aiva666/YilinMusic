/*
 * @Date: 2021-09-23 10:51:10
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-14 14:26:07
 * @FilePath: \yilin-music\src\openApi\index.ts
 */

import Axios from '../utils/Axios'

// 个性推荐
export const recommendedApi = {
    // 轮播图
    getSwiperList() {
        return Axios("/api/home/recommended/banner")
    },
    // 推荐歌单
    getCollectionList() {
        return Axios("/api/home/recommended/song-collection")
    },
}


// 排行榜

export const rankingApi = {
    // 排行榜列表
    getRankingList() {
        return Axios("/api/home/ranking/lastest")
    },
}

// 根据歌单ID获取歌单详情
export const getRankingList = (id:string) => {
    return Axios("/api/home/getSongCollectionDetail")
}