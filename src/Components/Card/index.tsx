/*
 * @Date: 2021-09-23 15:17:19
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-10 10:32:21
 * @FilePath: \yilin-music\src\Components\Card\index.tsx
 */
import React from 'react'
import {
    CaretRightOutlined,
} from '@ant-design/icons';
import "./index.scss"


interface propsType {
    title: string,
    image: string,
    count?: string,
    hideCount?: boolean,
    onClick?:Function,
}

const Card = (props: propsType) => {
    return (
        <div onClick={() => {
            props.onClick && props.onClick()
        }}>
            <div className="card-image">
                {
                    !props.hideCount ?
                        <span className="play-count"><CaretRightOutlined style={{ color: "#fff", fontSize: 14, marginRight: 2, }} />8746万</span>
                        : null
                }
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-title" title={props.title}>{props.title}</div>
        </div>
    )
}

export default Card