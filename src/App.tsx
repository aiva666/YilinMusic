import React, { FC, useState, useEffect, ComponentProps } from 'react';
import { Route, Redirect, Switch,Link } from 'react-router-dom'
import routerConfig from './routes/index'
import { Input, Row, Col, Menu } from 'antd';
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
} from '@ant-design/icons';

import "./App.scss"

interface MenuConfigType {
  id: number | string,
  title: number | string,
  key: string,
  icon?: any,
  children?: MenuConfigType[],
}

const App: FC = (props: any) => {


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
      key: "/ranking-list",
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
          id: '6-1',
          title: "最近播放",
          key: "/6-1",
          icon: <HistoryOutlined />,
        },
        {
          id: '6-2',
          title: "我的收藏",
          key: "/6-2",
          icon: <FlagOutlined />,
        },
      ],
    },
    {
      id: "7",
      title: "我的歌单",
      key: "/7",
      children: [
        {
          id: '7-1',
          title: "Zoom~Zoom",
          key: "/7-1",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-2',
          title: "Accompany",
          key: "/7-2",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-3',
          title: "愿世间所有的相遇都是久别重逢",
          key: "/7-3",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-4',
          title: "90年代华语金曲TOP100",
          key: "/7-4",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-5',
          title: "云音乐电音榜",
          key: "/7-5",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-6',
          title: "云音乐摇滚榜",
          key: "/7-6",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-7',
          title: "云音乐民谣榜",
          key: "/7-7",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-8',
          title: "云音乐古风榜",
          key: "/7-8",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-9',
          title: "云音乐民谣榜",
          key: "/7-9",
          icon: <CustomerServiceOutlined />,
        },
        {
          id: '7-10',
          title: "云音乐ACG榜",
          key: "/7-10",
          icon: <CustomerServiceOutlined />,
        },
      ],
    },

  ]

  // 重定向路由
  let [redirectRouters, setRedirectRouters] = useState<RouterParams[]>([])
  // 页面路由
  let [pageRouters, setPageRouters] = useState<RouterParams[]>([])


  // 获取重定向路由
  const initRedirectRouter = (arr: Array<RouterParams>): void => {
    let redirectArray: Array<RouterParams> = []
    let pageArray: Array<RouterParams> = []
    arr.forEach((item => {
      if (typeof item.redirect === "string") {
        redirectArray.push(item)
      } else if (item.name && item.path && item.component) {
        pageArray.push(item)
      }
    }))
    setRedirectRouters(redirectArray)
    setPageRouters(pageArray)
  }

  // 菜单点击事件
  const menuChangeHandler = (key: string): void => {
    // props.history.push(key)
  }

  useEffect(() => {
    initRedirectRouter(routerConfig)
  }, [])

  return (
    <div className="App">
      <header>
        <div className="container">
          <Row gutter={30}>
            <Col span={5}>
              <div className="logo">YiLinMusic</div>
            </Col>
            <Col span={19}>
              <div className="search-wrapper">
                <div>
                  <Input size="middle" allowClear suffix={<SearchOutlined />} />
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
                <Menu defaultSelectedKeys={['/recommended']} onClick={({ key }) => { menuChangeHandler(key) }}>
                  {
                    menuConfig.map(item => {
                      return (
                        item.children ?
                          <Menu.ItemGroup key={item.key} title={item.title}>
                            {
                              item.children.map(i => {
                                return <Menu.Item key={i.key} icon={i.icon}><Link to={i.key}>{i.title}</Link></Menu.Item>
                              })
                            }
                          </Menu.ItemGroup>
                          :
                          <Menu.Item key={item.key} icon={item.icon}><Link to={item.key}>{item.title}</Link></Menu.Item>

                      )
                    })
                  }

                </Menu>
              </div>
            </Col>
            <Col span={19}>
              <div className="view-wrapper">

                {
                  /* 重定向路由 */
                  redirectRouters.map((item, index) => {
                    return item.redirect ? <Redirect key={index} exact={item.exact} from={item.path} to={item.redirect} /> : null
                  })
                }
                <Switch>
                  {
                    // 页面路由
                    pageRouters.map((item, index) => {
                      return <Route key={index} path={item.path} component={item.component} exact={item.exact} strict={item.strict} />
                    })
                  }
                </Switch>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

export default App;
