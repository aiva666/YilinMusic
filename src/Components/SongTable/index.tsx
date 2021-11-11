
import React from "react";
import { HeartOutlined } from '@ant-design/icons'

import { Table } from 'antd'

interface PropsType {
    data: SongListDetailListType[],
    type?: 'all' | "singer" | 'simple'
}

const SongTable = (props: PropsType) => {

    const index = {
        title: "",
        dataIndex: 'id',
        width: 50,
        align: "center" as "center",
        render(text: string, record: any, index: number) {
            return (index + 1) < 10 ? '0' + (index + 1) : index + 1
        }
    }
    const action = {
        title: "操作",
        dataIndex: 'action',
        width: 50,
        align: "center" as "center",
        render(text: string, record: any, index: number) {
            return <HeartOutlined />
        }
    }
    const title = {
        title: "标题",
        width: 360,
        dataIndex: 'song_name',
        className: "song_title",

    }
    const singer = {
        title: "歌手",
        dataIndex: 'song_singer',
    }
    const album = {
        title: "专辑",
        dataIndex: 'song_album',
    }
    const time = {
        title: "时间",
        align: "center" as "center",
        dataIndex: 'song_time',
    }

    const columnsEnum:any = {
        'all': [index, action, title, singer, album, time,],
        'singer': [index, action, title, time,],
        'simple': [index, action, title, singer, album, time,],
    }

    return (
        <Table showHeader={ props.type !== 'singer'} className="songListDetail-table" rowClassName="songListDetail-tableRow" rowKey="id" size="small" pagination={false} dataSource={props.data} columns={columnsEnum[(props.type || 'all')]} />
    )
}

export default SongTable