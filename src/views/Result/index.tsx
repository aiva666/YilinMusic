/*
 * @Date: 2021-11-26 13:42:44
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 12:45:42
 * @FilePath: \yilin-music\src\views\Result\index.tsx
 */
import React,{FC} from 'react'
import SongTable from '@/Components/SongTable'
const Result:FC = () => {

    return (
        <div className="result-wrapper">
            <h2 className="section-title">
                <p>找到<span style={{margin:'0 6px'}}>0</span>首单曲</p>
            </h2>
            <SongTable data={[]} />
        </div>
    )
}

export default Result