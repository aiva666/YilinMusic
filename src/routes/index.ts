/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-10 10:57:38
 * @FilePath: \yilin-music\src\routes\index.ts
 */
import Recommended from '../views/Recommended'

import RankingList from '../views/RankingList'
import RankingDetail from '../views/RankingList/Detail'
import LatestMusic from '../views/LatestMusic'
import SongCollection from '../views/SongCollection'
import Singer from "../views/Singer"
import SingerDetail from '../views/Singer/SingerDetail'

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
    // 歌手
    {
        title:"歌手",
        path:"/singer",
        name:'singer',
        component:Singer
    },
    {
        title:"歌手详情",
        path:"/singer-detail/:id",
        name:'singer-detail',
        component:SingerDetail,
        exact:true,
    },
]

export default routes