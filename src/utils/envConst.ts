

interface BaseUrlType {
    development:string,
    production:string,
    test?:string
}

const BaseUrl:BaseUrlType = {
    development:"http://localhost:5000/",
    production:"https://aiva.vip/"
}

export default BaseUrl