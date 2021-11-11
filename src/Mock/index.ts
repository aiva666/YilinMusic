/*
 * @Date: 2021-09-23 11:02:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-11 10:27:23
 * @FilePath: \yilin-music\src\Mock\index.ts
 */
import Mock, { } from 'mockjs'

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
            cover_img: "https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg",
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
                    isSq: true,
                    id: "@id"
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


// 最新音乐-------------------------------


// 最新音乐分类
Mock.mock("/api/home/latestMuic/typeClass", "get", (ops: any) => {
    return mockResponse({
        "data|20": [
            {
                id: "@id",
                song_name: "@ctitle",
                singer: "@cname",
                cover: "http://p1.music.126.net/BQNZZsrmmQAcofBgAYW4XQ==/109951165825638440.jpg?param=140y140",
                album: "@ctitle",
                song_time: "@time(mm:ss)",
            }
        ]
    })
})


// 歌单-------------------------------

// 歌单分类
Mock.mock("/api/home/songCollection/classList", "get", (ops: any) => {
    return mockResponse({
        "data": {
            "languages|6": [
                {
                    'id': '@id',
                    "title": "@ctitle(4)"
                }
            ],
            "style|20": [
                {
                    'id': '@id',
                    "title": "@ctitle(4)"
                }
            ],
            "scenario|12": [
                {
                    'id': '@id',
                    "title": "@ctitle(4)"
                }
            ],
            "emotional|12": [
                {
                    'id': '@id',
                    "title": "@ctitle(4)"
                }
            ],
            "theme|12": [
                {
                    'id': '@id',
                    "title": "@ctitle(4)"
                }
            ],
            "hot|10": [
                {
                    'id': '@id',
                    "title": "@ctitle(3)"
                }
            ],
        }
    })
})

// 根据分类ID获取歌单
Mock.mock("/api/home/songCollection/getCollectionByTagId", "get", (ops: any) => {
    return mockResponse({
        "data": {
            "good": {
                cover: "https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg",
                title: "@ctitle(10)",
                desc: "@ctitle(18)"
            },
            "list|24": [
                {
                    id: "@id",
                    title: "@ctitle",
                    "image": "https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg",
                    count: 8796532
                }
            ]
        }
    })
})


// 歌手-------------------------------

// 获取歌手
Mock.mock("/api/home/singer/list", "get", (ops: any) => {
    return mockResponse({
        "data|30": [
            {
                name: "@name",
                cover: "https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg",
                id: '@id',
            }
        ]
    })
})

// 根据ID获取歌手详情
Mock.mock("/api/home/singer/getSingerInfoById", "get", (ops: any) => {
    return mockResponse({
        "data": {
            id: '@id',
            cover_img: "https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg",
            name: "@cname",
            song_count: 657,
            album_count: 21,
            "list|8": [
                {
                    id:"@id",
                    "cover":"https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg",
                    release_time:"@date(yyyy-MM-dd)",
                    "title":"@ctitle",
                    "data|6": [
                        {
                            song_name: "@ctitle",
                            song_time: "@time(mm:ss)",
                            id: "@id",
                        }
                    ]
                }
            ]
        }
    })
})




