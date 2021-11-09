/*
 * @Date: 2021-09-23 10:51:10
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-09 15:11:02
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

// --------------------------------------------------------------------


// 排行榜

export const rankingApi = {
    // 排行榜列表
    getRankingList() {
        return Axios("/api/home/ranking/lastest")
    },
}

// --------------------------------------------------------------------


// 最新音乐

export const latestMusic = {
    // 根据分类获取歌曲列表
    getLatestMusicListByType() {
        return Axios("/api/home/latestMuic/typeClass")
    }
}

// --------------------------------------------------------------------


// 歌单

export const songCollection = {
    // 获取歌单分类
    getSongCollectionClass() {
        return Axios("/api/home/songCollection/classList")
    },
    // 根据分类ID获取歌单
    getSongCollectionById(id:string) {
        return Axios("/api/home/songCollection/getCollectionByTagId")
    },
}

// --------------------------------------------------------------------


// 根据歌单ID获取歌单详情
export const getRankingList = (id:string) => {
    return Axios("/api/home/getSongCollectionDetail")
}