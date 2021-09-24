/*
 * @Date: 2021-09-23 11:02:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-09-24 10:08:34
 * @FilePath: \yilin-music\src\Mock\index.ts
 */
import Mock,{Random} from 'mockjs'

const mockResponse = (template: any) => {
    return {
        statusCode: 200,
        message: '',
        ...Mock.mock(template)
    }
}

// 个性推荐-------------------------------

// 轮播图
Mock.mock("/api/recommended/banner", "get", (ops: any) => {
    return mockResponse({
        "data|6": [
            {
                id: "@id",
                title:"@title",
                "image|+1":[
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
Mock.mock("/api/recommended/song-collection", "get", (ops: any) => {
    return mockResponse({
        "data|18": [
            {
                id: "@id",
                title:"@title",
                "image":"https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg"
            }
        ]
    })
})



