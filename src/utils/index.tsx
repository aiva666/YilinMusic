/* 数字转中文(以万为单位) */
export const numberToCapitalString = (num: number): string => {
    if (num > 9999) {
        let params: number = num / 10000;
        return parseFloat(params + "").toFixed(2) + "万";
    } else {
        return num + "";
    }
};

/* 毫秒转换时间 */
export const transformTime = (ms: number): string => {
    let t = ms / 1000
    let m:number | string = parseInt((t / 60)+'');
    let s:number | string = parseInt((t % 60)+'');
    m = m > 9 ? m : "0" + m;
    s = s > 9 ? s : "0" + s;
    return m + ":" + s;
};
