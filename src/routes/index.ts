/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-09-24 10:31:49
 * @FilePath: \yilin-music\src\routes\index.ts
 */
import Recommended from '../views/Recommended'
import RankingList from '../views/RankingList'

const routes:Array<RouterParams> = [
    {
        path:"/",
        redirect:'/recommended',
        exact:true
    },
    {
        path:"/recommended",
        name:'recommended',
        component:Recommended
    },
    {
        path:"/ranking-list",
        name:'ranking-list',
        component:RankingList
    },
]

export default routes