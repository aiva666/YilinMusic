/*
 * @Date: 2021-11-18 08:48:58
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-23 15:21:54
 * @FilePath: \yilin-music\src\Components\CommentBox\index.tsx
 */
import React, { FC, useState } from 'react'
import { Input, Button } from 'antd'

import "./index.scss"

interface PropsType {
    onSubmit?:(val:string) => void
}

const CommentBox: FC<PropsType> = (props:PropsType) => {

    const [value, setValue] = useState('')

    const commitHandler = ():void => {
        props.onSubmit && props.onSubmit(value)
    }

    return (
        <div>
            <Input.TextArea
                placeholder="请输入评论内容"
                allowClear
                value={value}
                rows={5}
                maxLength={300}
                className="commentTextArea"
                onPressEnter={commitHandler}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <div style={{ marginTop: 16, textAlign: 'right' }}>
                <Button onClick={commitHandler}>评论</Button>
            </div>
        </div>
    )
}

export default CommentBox