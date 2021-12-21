/*
 * @Date: 2021-11-18 10:57:26
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 12:34:47
 * @FilePath: \yilin-music\src\Components\CommentList\index.tsx
 */
import React, { FC, useState } from "react";
import { List, Avatar, Space, Skeleton, Button } from "antd";
import { LikeOutlined } from '@ant-design/icons';

const IconText = (props: any) => {
    return (
        <Space>
            {React.createElement(props.icon)}
            {props.text}
        </Space>
    )
};

export const PaginationList = (props:any) => {
    const listData:commentListItemType[] = props.data || [];
    
    return (
        <div>
            <List
                itemLayout="vertical"
                size="large"
                pagination={props.page === false ? false : {
                    onChange: page => {
                        props.onChange && props.onChange(page)
                    },
                    pageSize: 10,
                    total:props.total || 0
                }}
                dataSource={listData}
                footer={null}
                renderItem={(item:any) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.user.avatarUrl} />}
                            title={item.user.nickname}
                            description={item.timeStr}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </div>
    )
}







export const LoadMoreList = (props:any) => {

    const [loading, setLoading] = useState(false)
    const defaultList: commentListItemType[] = []
    const [list, setList] = useState(defaultList)

    const onLoadMore = () => {
        let arr: commentListItemType[] = []
        for (let i = 0; i < 6; i++) {
            arr.push({
                id: i + '',
                avatar: "https://joeschmoe.io/api/v1/random",
                name: "Aiva" + i,
                date: "2020-11-12",
                content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
            });
        }
        setList([...list, ...arr])

    };

    const loadMore = !loading ? (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={onLoadMore}>查看更多</Button>
        </div>
    ) : null;

    return (
        <List
            loading={loading}
            loadMore={loadMore}
            itemLayout="vertical"
            size="large"
            dataSource={list}
            style={{ minHeight: 350 }}
            renderItem={(item: any) => {
                return (

                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        ]}
                    >
                        <Skeleton active avatar loading={false}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.name}>{item.name}</a>}
                                description={item.date}
                            />
                            {item.content}
                        </Skeleton>
                    </List.Item>

                )
            }
            }
        />
    );
}

