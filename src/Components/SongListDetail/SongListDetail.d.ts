/*
 * @Date: 2021-10-14 15:13:11
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-14 16:36:38
 * @FilePath: \yilin-music\src\Components\SongListDetail\SongListDetail.d.ts
 */

interface create_user_info_type {
    name: string,
    avatar: string
}


interface tags_type {
    id: string,
    title: string
}

interface SongListDetailListType {
    song_name: string,
    song_singer: string,
    song_album: string,
    song_time: string,
    isSql:boolean,
    id:string
}

interface SongListDetailResponseType {
    id: string,
    cover_img:string,
    title: string,
    create_data: string,
    create_user_info: create_user_info_type,
    collection_num: number,
    share_num: number,
    tags: tags_type[],
    songNum: number,
    play_count: number,
    desc: string,
    comment_count: number,
    list:Array<SongListDetailListType>
}