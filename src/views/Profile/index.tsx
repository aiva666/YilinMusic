/*
 * @Date: 2021-11-23 09:48:07
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 14:37:53
 * @FilePath: \yilin-music\src\views\Profile\index.tsx
 */
import React, { FC, useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { ManOutlined } from "@ant-design/icons";
import Card from "@/Components/Card";
import { getUserPlayList } from "@/openApi";
import "./index.scss";

interface TPropsType {
    history: any;
}

const Profile: FC<TPropsType> = (props: TPropsType) => {
    const [profile, setProFile] = useState<any>({});
    const [userPlayList, setUserPlayList] = useState([]);

    const queryUserInfo = async (id: number) => {
        let res: any = await getUserPlayList(id);
        if (res) {
            setUserPlayList(res.playlist);
        }
    };

    useEffect(() => {
        let p = JSON.parse(localStorage.getItem("profile") as string);
        setProFile(p);
        queryUserInfo(p.userId);

    }, []);

    return (
        <div className="profile-wrapper rankDetail">
            <header>
                <div className="view-icon">
                    <div
                        style={{
                            backgroundImage: `url(${profile.avatarUrl})`,
                        }}
                    ></div>
                </div>
                <div className="view-desc">
                    <div className="info-header">
                        <div>
                            <h2>
                                <span className="view-title">
                                    {profile.nickname}
                                </span>
                            </h2>
                            <div className="info-toolbar">
                                <p>
                                    <span className="info-sex-icon">
                                        {profile.gender === 1 ? (
                                            <ManOutlined
                                                style={{ color: "skyblue" }}
                                            />
                                        ) : (
                                            <ManOutlined
                                                style={{
                                                    color: "pink",
                                                    transform: "rotate(180deg)",
                                                }}
                                            />
                                        )}
                                    </span>
                                    <span className="normal-left">23岁</span>
                                </p>
                                <Button
                                    size="small"
                                    onClick={() => {
                                        props.history.push("/profile/edit");
                                    }}
                                >
                                    编辑资料
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <span>所在地区：</span>
                        <span>河南省</span>
                        <span>郑州市</span>
                    </div> */}
                    <div>
                        <span>个人介绍：</span>
                        <span>{profile.signature}</span>
                    </div>
                </div>
            </header>
            <main>
                <h3>我的歌单</h3>
                <Row gutter={16}>
                    {userPlayList.map((item:any) => {
                        return (
                            <Col
                                key={item.id}
                                span={4}
                                style={{ marginBottom: 16 }}
                            >
                                <Card
                                    title={item.name}
                                    image={item.coverImgUrl}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </main>
        </div>
    );
};

export default Profile;
