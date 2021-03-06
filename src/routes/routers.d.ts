/*
 * @Date: 2021-09-18 10:44:44
 * @LastEditors: Aiva
 * @LastEditTime: 2021-10-13 15:08:06
 * @FilePath: \yilin-music\src\routes\routers.d.ts
 */


interface RouterParams  {
    path:string,
    name?:string,
    redirect?:string,
    component?:any,
    children?:Array<RouterParams>,
    exact?:boolean,
    strict?:boolean,
    title?:string,
}
