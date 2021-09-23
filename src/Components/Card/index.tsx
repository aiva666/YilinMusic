/*
 * @Date: 2021-09-23 15:17:19
 * @LastEditors: Aiva
 * @LastEditTime: 2021-09-23 15:53:57
 * @FilePath: \yilin-music\src\Components\Card\index.tsx
 */
import React from 'react'
import {
    CaretRightOutlined,
  } from '@ant-design/icons';
import "./index.scss"


interface propsType {
    title:string,
    image:string,
    count:string
}

const Card = (props:propsType) => {
    return (
        <div>
            <div className="card-image">
                <span className="play-count"><CaretRightOutlined style={{color:"#fff",fontSize:14,marginRight:2,}} />8746万</span>
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-title" title={props.title}>{props.title}</div>
        </div>
    )
}

export default Card