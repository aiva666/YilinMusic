/*
 * @Date: 2021-11-09 15:15:43
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 11:08:04
 * @FilePath: \yilin-music\src\views\SongCollection\songCollection.d.ts
 */

interface songCardType {
    id: string;
    title: string;
    image: string;
    playCount: string | number;
    coverImgUrl: string;
    name: string;
    description: string;
}

// 歌单信息类型
interface songCollectionInfoType {
    good: {
        coverImgUrl?: string;
        name?: string;
        description?: string;
        playCount?: string;
    };
    list: songCardType[];
}
