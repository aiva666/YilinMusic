

interface BaseUrlType {
    development:string,
    production:string,
    test?:string
}

const BaseUrl:BaseUrlType = {
    development:"http://localhost:5000/",   //  开发环境
    production:"https://aiva.vip/"          //  生产环境
}

export default BaseUrl