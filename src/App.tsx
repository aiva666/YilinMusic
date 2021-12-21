import React, { FC, useState, useEffect } from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    useHistory,
    useLocation,
} from "react-router-dom";
import routerConfig from "./routes/index";
import { Input, Row, Col, Menu, Avatar, Modal } from "antd";
import Login from "@/views/Login";
import Player from "./views/Player";
import {
    SearchOutlined,
    AppstoreOutlined,
    BarsOutlined,
    TagsOutlined,
    FolderOutlined,
    UserOutlined,
    HistoryOutlined,
    FlagOutlined,
    CustomerServiceOutlined,
    HeartOutlined,
    ExpandOutlined,
    PlayCircleOutlined,
    StepBackwardOutlined,
    StepForwardOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
} from "@ant-design/icons";
import Draggable from "react-draggable";
import "./App.less";
import "./App.scss";
import LogoImg from "@/assets/images/logo.png";
import { getUserPlayList } from "@/openApi";

interface MenuConfigType {
    id: number | string;
    title: number | string;
    key: string;
    icon?: any;
    children?: MenuConfigType[];
}

const App: FC = () => {
    const history = useHistory();
    const location = useLocation();

    const [userPlayList, setUserPlayList] = useState([]);
    const [profile, setProFile] = useState<any>({});

    const queryUserInfo = async (id:number) => {
        let res: any = await getUserPlayList(id);
        if (res) {
            setUserPlayList(res.playlist);
        }
    };

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            let p = JSON.parse(localStorage.getItem("profile") as string)
            setProFile(p);
            queryUserInfo(p.userId);
        }
    }, []);

    // 菜单配置
    const menuConfig: MenuConfigType[] = [
        {
            id: "1",
            title: "个性推荐",
            key: "/recommended",
            icon: <AppstoreOutlined />,
        },
        {
            id: "2",
            title: "排行榜",
            key: "/ranking",
            icon: <BarsOutlined />,
        },
        {
            id: "3",
            title: "最新音乐",
            key: "/latest-music",
            icon: <TagsOutlined />,
        },
        {
            id: "4",
            title: "歌单",
            key: "/song-collection",
            icon: <FolderOutlined />,
        },
        {
            id: "5",
            title: "歌手",
            key: "/singer",
            icon: <UserOutlined />,
        },
        {
            id: "6",
            title: "我的音乐",
            key: "/6",
            children: [
                {
                    id: "6-1",
                    title: "最近播放",
                    key: "/history",
                    icon: <HistoryOutlined />,
                },
                {
                    id: "6-2",
                    title: "我的收藏",
                    key: "/collection",
                    icon: <FlagOutlined />,
                },
            ],
        },
        {
            id: "7",
            title: "我的歌单",
            key: "/7",
            children: [
                ...userPlayList.map((item:any) => {
                    return {
                        id: item.id,
                        title: item.name,
                        key: `/ranking/detail/${item.id}`,
                        icon: <CustomerServiceOutlined />,
                    }
                })
                
            ],
        },
    ];

    // 重定向路由
    let [redirectRouters, setRedirectRouters] = useState<RouterParams[]>([]);
    // 页面路由
    let [pageRouters, setPageRouters] = useState<RouterParams[]>([]);

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showPlayerBox, setShowPlayerBox] = useState(false);

    // 搜索内容
    const [keyWords, setKeyWords] = useState("");

    // 选择的菜单
    const [activeMenus, setActiveMenu] = useState(["/recommended"]);

    useEffect(() => {
        initRedirectRouter(routerConfig);
    }, []);

    useEffect(() => {
        // 只匹配一级菜单
        let str = location.pathname;
        if (str.substr(1).indexOf("/") < 0) {
            setActiveMenu([location.pathname]);
        } else {
            setActiveMenu([
                location.pathname.substr(0, location.pathname.lastIndexOf("/")),
            ]);
        }
    }, [location]);

    // 获取重定向路由
    const initRedirectRouter = (arr: Array<RouterParams>): void => {
        let redirectArray: Array<RouterParams> = [];
        let pageArray: Array<RouterParams> = [];
        arr.forEach(item => {
            if (typeof item.redirect === "string") {
                redirectArray.push(item);
            } else if (item.name && item.path && item.component) {
                pageArray.push(item);
            }
        });
        setRedirectRouters(redirectArray);
        setPageRouters(pageArray);
    };

    // 搜索
    const toSearch = () => {
        let val = keyWords;
        if (!val) return;
        history.push("/search?q=" + val);
    };

    return (
        <div className="App">
            <header>
                <div className="container">
                    <Row gutter={30}>
                        <Col span={5}>
                            <div className="logo">
                                <img src={LogoImg} alt="YilinMusic" />
                                {/* <span>忆霖MUSIC</span> */}
                            </div>
                        </Col>
                        <Col span={19}>
                            <div className="header-content">
                                <div className="header-content-start">
                                    <LeftCircleOutlined
                                        onClick={() => {
                                            history.go(-1);
                                        }}
                                    />
                                    <RightCircleOutlined
                                        onClick={() => {
                                            history.go(1);
                                        }}
                                    />
                                    <div className="search-wrapper">
                                        <div>
                                            <Input
                                                size="middle"
                                                placeholder="请输入歌曲名"
                                                allowClear
                                                value={keyWords}
                                                onChange={e => {
                                                    setKeyWords(e.target.value);
                                                }}
                                                suffix={
                                                    <SearchOutlined
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={toSearch}
                                                    />
                                                }
                                                onPressEnter={toSearch}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="user-wrapper">
                                    {token ? (
                                        <Link to="/profile">
                                            <Avatar
                                                size={30}
                                                style={{
                                                    border: "1px solid #f0f0f0",
                                                }}
                                                src={profile.avatarUrl}
                                            />
                                            <span>{profile.nickname}</span>
                                        </Link>
                                    ) : (
                                        <span
                                            onClick={() => {
                                                setShowLoginModal(true);
                                            }}
                                        >
                                            登录/注册
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
            <main>
                <div className="container">
                    <Row gutter={30}>
                        <Col span={5}>
                            <div className="menu-wrapper">
                                <Menu selectedKeys={activeMenus}>
                                    {menuConfig.map(item => {
                                        return item.children ? (
                                            <Menu.ItemGroup
                                                key={item.key}
                                                title={item.title}
                                            >
                                                {item.children.map(i => {
                                                    return (
                                                        <Menu.Item
                                                            key={i.key}
                                                            icon={i.icon}
                                                        >
                                                            <Link to={i.key}>
                                                                {i.title}
                                                            </Link>
                                                        </Menu.Item>
                                                    );
                                                })}
                                            </Menu.ItemGroup>
                                        ) : (
                                            <Menu.Item
                                                key={item.key}
                                                icon={item.icon}
                                            >
                                                <Link to={item.key}>
                                                    {item.title}
                                                </Link>
                                            </Menu.Item>
                                        );
                                    })}
                                </Menu>
                            </div>
                        </Col>
                        <Col span={19}>
                            <div className="view-wrapper">
                                {
                                    /* 重定向路由 */
                                    redirectRouters.map((item, index) => {
                                        return item.redirect ? (
                                            <Redirect
                                                key={index}
                                                exact={item.exact}
                                                from={item.path}
                                                to={item.redirect}
                                            />
                                        ) : null;
                                    })
                                }
                                <Switch>
                                    {
                                        // 页面路由
                                        pageRouters.map((item, index) => {
                                            return (
                                                <Route
                                                    key={index}
                                                    path={item.path}
                                                    component={item.component}
                                                    exact={item.exact}
                                                    strict={item.strict}
                                                />
                                            );
                                        })
                                    }
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </div>
            </main>

            <Modal
                destroyOnClose
                bodyStyle={{ padding: 0 }}
                wrapClassName="login-modal"
                closable={false}
                visible={showLoginModal}
                width={500}
                footer={null}
                onCancel={() => {
                    setShowLoginModal(false);
                }}
            >
                <Login />
            </Modal>

            <Draggable
                axis="both"
                handle=".handle"
                // offsetParent={document.body}
                // bounds={"parent"}
                defaultPosition={{ x: window.innerWidth / 10, y: -200 }}
                grid={[1, 1]}
                scale={1}
            >
                <div className="player-control handle">
                    <div>
                        <div className="song-cover">
                            <img
                                src="https://p4.music.126.net/a6VPApB8BSgcwlmT2RUOEA==/109951166432539305.jpg"
                                alt="xxxxx"
                            />
                        </div>
                        <div className="player-action">
                            <p>There For You - Martin Garrix / Troye Sivan</p>
                            <div>
                                <StepBackwardOutlined />
                                <PlayCircleOutlined />
                                <StepForwardOutlined />
                            </div>
                        </div>
                        <div className="song-action">
                            <HeartOutlined />
                            <ExpandOutlined
                                onClick={() => {
                                    setShowPlayerBox(true);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Draggable>

            <Modal
                wrapClassName="player-modal"
                width={1000}
                visible={showPlayerBox}
                footer={null}
                onCancel={() => {
                    setShowPlayerBox(false);
                }}
                destroyOnClose
            >
                <Player />
            </Modal>
        </div>
    );
};

export default App;
