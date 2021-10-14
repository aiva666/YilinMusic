
// 数字转中文(以万为单位)
export const numberToCapitalString = (num: number):string => {
    if(num > 9999) {
        let params:number = num / 10000
        return parseFloat(params + '').toFixed(2) + "万"
    }else {
        return num + ''
    }
}