/*
 * @Date: 2021-10-13 13:58:08
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-13 14:03:29
 * @FilePath: \yilin-music\src\views\RankingList\rankingList.d.ts
 */

interface rankListItemType {
    id:string,
    singer:string,
    song_name:string
}

interface rankListType {
    id:string,
    title:string,
    updateTime:string,
    list:Array<rankListItemType>
}