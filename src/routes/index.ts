/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-26 13:41:17
 * @FilePath: \yilin-music\src\routes\index.ts
 */
import Recommended from '../views/Recommended'

import RankingList from '../views/RankingList'
import RankingDetail from '../views/RankingList/Detail'

import LatestMusic from '../views/LatestMusic'

import SongCollection from '../views/SongCollection'


const routes:Array<RouterParams> = [
    // 根路径重定向到个性推荐
    {
        path:"/",
        redirect:'/recommended',
        exact:true
    },
    // 个性推荐
    {
        title:"个性推荐",
        path:"/recommended",
        name:'recommended',
        component:Recommended
    },
    // 排行榜
    {
        title:"排行榜",
        path:"/ranking-list",
        name:'ranking-list',
        component:RankingList
    },
    // 排行榜详情
    {
        title:"排行榜详情",
        path:"/ranking-detail",
        name:'ranking-detail',
        component:RankingDetail
    },
    // 最新音乐
    {
        title:"最新音乐",
        path:"/latest-music",
        name:'latest-music',
        component:LatestMusic
    },
    // 歌单
    {
        title:"歌单",
        path:"/song-collection",
        name:'song-collection',
        component:SongCollection
    },
]

export default routes