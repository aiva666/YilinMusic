/*
 * @Date: 2021-11-09 15:15:43
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-09 15:21:42
 * @FilePath: \yilin-music\src\views\SongCollection\songCollection.d.ts
 */

interface goodType {
    cover?: string,
    title?: string,
    desc?: string,
}

interface songCardType {
    id: string,
    title: string,
    image: string,
    count:string | number,
}


// 歌单信息类型
interface songCollectionInfoType {
    good: goodType,
    list: songCardType[],
}