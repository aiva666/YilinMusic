/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-09-23 10:00:01
 * @FilePath: \yilin-music\src\routes\index.ts
 */
import Recommended from '../views/Recommended'

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
    }
]

export default routes