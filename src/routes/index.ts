/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-13 15:07:58
 * @FilePath: \yilin-music\src\routes\index.ts
 */
import Recommended from '../views/Recommended'
import RankingList from '../views/RankingList'
import RankingDetail from '../views/RankingList/Detail'

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
]

export default routes