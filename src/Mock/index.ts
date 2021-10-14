/*
 * @Date: 2021-09-23 11:02:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-14 16:37:20
 * @FilePath: \yilin-music\src\Mock\index.ts
 */
import Mock, { Random } from 'mockjs'

const mockResponse = (template: any) => {
    return {
        statusCode: 200,
        message: '',
        ...Mock.mock(template)
    }
}


// 根据歌单ID查询歌单详情
Mock.mock("/api/home/getSongCollectionDetail", "get", (ops: any) => {
    return mockResponse({
        "data":
        {
            id: "@id",
            title: "@ctitle",
            create_data: "@date(MM月dd日)",
            cover_img:"https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg",
            create_user_info: {
                name: "@ctitle",
                avatar: "@url",
            },
            collection_num: 664878,
            share_num: 88323,
            "tags|2-6": [
                {
                    id: "@id",
                    title: "@ctitle(2,6)"
                }
            ],
            songNum: 66,
            play_count: 231233,
            desc: "@ctitle",
            comment_count: 68686,
            "list|66": [
                {
                    song_name: "@ctitle",
                    song_singer: "@ctitle",
                    song_album: "@ctitle",
                    song_time: "@time(mm:ss)",
                    isSq:true,
                    id:"@id"
                }
            ]
        }
    })
})


// 个性推荐-------------------------------

// 轮播图
Mock.mock("/api/home/recommended/banner", "get", (ops: any) => {
    return mockResponse({
        "data|6": [
            {
                id: "@id",
                title: "@title",
                "image|+1": [
                    "http://p1.music.126.net/mJp8RnXnaKSYm4Y2L8hBSQ==/109951166446846106.jpg?imageView&quality=89",
                    "http://p1.music.126.net/UZducXaYUzyukQuRxZ5rng==/109951166445121244.jpg?imageView&quality=89",
                    "http://p1.music.126.net/LooRQwOrGF5k6FTnCkB8Lw==/109951166446132301.jpg?imageView&quality=89",
                    "http://p1.music.126.net/sHV7Pk39DoZvLeoXT8gUlA==/109951166445136794.jpg?imageView&quality=89",
                    "http://p1.music.126.net/ykwvcZFx9Y8Rr4igaNECfw==/109951166445952566.jpg?imageView&quality=89",
                    "http://p1.music.126.net/p5lV3ynfjYtCfxyUsiSIEg==/109951166445154140.jpg?imageView&quality=89",
                ]
            }
        ]
    })
})

// 推荐歌单
Mock.mock("/api/home/recommended/song-collection", "get", (ops: any) => {
    return mockResponse({
        "data|18": [
            {
                id: "@id",
                title: "@ctitle",
                "image": "https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg"
            }
        ]
    })
})


// 排行榜-------------------------------

// 排行榜列表
Mock.mock("/api/home/ranking/lastest", "get", (ops: any) => {
    return mockResponse({
        "data|4": [
            {
                id: "@id",
                title: "@ctitle(3)",
                updateTime: "@date(MM月dd日)",
                "list|5": [
                    {
                        song_name: "@ctitle",
                        singer: "@name",
                        id: "@id",
                    }
                ]
            }
        ]
    })
})




