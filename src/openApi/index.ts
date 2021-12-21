/*
 * @Date: 2021-09-23 10:51:10
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 12:47:21
 * @FilePath: \yilin-music\src\openApi\index.ts
 */

import Axios from '../utils/Axios'

// 个性推荐

export const recommendedApi = {
    // 轮播图
    getSwiperList() {
        return Axios("/banner")
    },
    // 推荐歌单
    getCollectionList() {
        return Axios("/personalized")
    },
}

// --------------------------------------------------------------------


// 排行榜

export const rankingApi = {
    // 排行榜列表
    getRankingList() {
        return Axios("/toplist/detail")
    },
}

// --------------------------------------------------------------------


// 最新音乐

export const latestMusic = {
    // 根据分类获取歌曲列表
    getLatestMusicListByType(type:number = 0) {
        return Axios(`/top/song?type=${type}`)
    }
}

// --------------------------------------------------------------------


// 歌单

export const songCollection = {
    // 获取歌单分类
    getSongCollectionClass() {
        return Axios("/playlist/highquality/tags")
    },
    // 根据分类ID获取歌单
    getSongCollectionById(id: string,limit:number = 25) {
        return Axios(`/top/playlist/highquality?limit=${limit}`)
    },
}

// --------------------------------------------------------------------


// 歌手

export const singer = {
    // 获取歌手列表
    getSingerList(limit:number = 20) {
        return Axios(`/top/artists?limit=${limit}`)
    },

    // 根据ID获取歌手详情
    getSingeInfo(id:number) {
        return Axios(`/artist/detail?id=${id}`)
    },

}

// --------------------------------------------------------------------


// 根据歌单ID获取歌单详情
export const getRankingList = (id: string) => {
    return Axios(`/playlist/detail?id=${id}`)
}


// --------------------------------------------------------------------


// 根据歌单ID获取歌单评论
export const getCommentList = (id: string,offset:number = 0) => {
    return Axios(`/comment/playlist?id=${id}&offset=${offset}`)
}


// --------------------------------------------------------------------


// 根据获取最近播放
export const getHistory = () => {
    return Axios("/api/home/history")
}


// --------------------------------------------------------------------


// 我的收藏
export const myCollection = {
    getAlbum() {
        return Axios("/api/home/collection/album")
    },
    getSinger() {
        return Axios("/api/home/collection/singer")
    },
}