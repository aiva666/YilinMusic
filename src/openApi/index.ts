/*
 * @Date: 2021-09-23 10:51:10
 * @LastEditors: Aiva
 * @LastEditTime: 2021-09-23 15:39:20
 * @FilePath: \yilin-music\src\openApi\index.ts
 */

import Axios from '../utils/Axios'

// 个性推荐
export const recommendedApi = {
    // 轮播图
    getSwiperList() {
        return Axios("/api/recommended/banner")
    },
    // 轮播图
    getCollectionList() {
        return Axios("/api/recommended/song-collection")
    },
}
