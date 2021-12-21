
import React from "react";
import { HeartOutlined } from '@ant-design/icons'
import {transformTime} from "@/utils"
import { Table } from 'antd'

interface PropsType {
    data: SongListDetailListType[],
    type?: 'all' | "singer" | 'simple' | 'playList'
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
        dataIndex: 'name',
        className: "song_title",

    }
    const singer = {
        title: "歌手",
        dataIndex: ["ar",'name'],
        render(_:any,item:any) {
            return item['ar'][0]['name']
        }
    }
    const album = {
        title: "专辑",
        dataIndex: ["al",'name'],
        ellipsis:true
    }
    const time = {
        title: "时间",
        align: "center" as "center",
        dataIndex: 'dt',
        render(_:any,item:any) {
            return transformTime(item.dt)
        }
    }

    const columnsEnum: any = {
        'all': [index, action, title, singer, album, time,],
        'singer': [index, action, title, time,],
        'simple': [index, title, singer, album, time,],
        'playList': [title, singer, time,],
    }

    return (
        <Table
            showHeader={(props.type !== 'singer') && (props.type !== 'playList')}
            className="songListDetail-table"
            rowClassName="songListDetail-tableRow"
            rowKey="id"
            size="small"
            pagination={false}
            dataSource={props.data}
            columns={columnsEnum[(props.type || 'all')]}
        />
    )
}

export default SongTable