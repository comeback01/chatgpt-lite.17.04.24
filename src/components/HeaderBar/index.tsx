import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'

import styles from './index.module.less'

const { Link } = Typography

const { Header } = Layout

const HeaderBar = () => {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.logoBar}>
          <Link href="/">
            <img alt="logo" src="/logo192.png" />
            <h1>WebiScriptura - 22.04.2024</h1>
          </Link>
        </div>
        <Space className={styles.right} size={0}>
          <span className={styles.right}>
           
          </span>
        </Space>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar
