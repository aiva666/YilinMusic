/*
 * @Date: 2021-05-26 12:28:52
 * @LastEditors: Aiva
 * @LastEditTime: 2021-05-26 12:29:08
 * @FilePath: \music-163\src\utils\Axios\axios.d.ts
 */

import * as axios from 'axios'
 
declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>
    }
}