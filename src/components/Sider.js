import React from 'react';
import {Menu} from "antd";
import {
    HomeOutlined,
    CalendarOutlined,
    TeamOutlined,
    DatabaseOutlined,
    ToolOutlined,
    RollbackOutlined
  } from "@ant-design/icons";

function Sider(props) {
    const { SubMenu } = Menu;

    return (
        <>
          <div />
          <img
            src="\image\Mobily.PNG"
            alt="Mobily"
            width="35px"
            style={{ margin: "30px 5px 30px 30px" }}
          />
          <span style={{ color: "white", fontFamily: "revert" }}>
            Cisco x Mobily
          </span>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item  icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item>Features</Menu.Item>
            <Menu.Item icon={<CalendarOutlined />}>Calender</Menu.Item>
            <Menu.Item  icon={<DatabaseOutlined />}>
              Inventory Management
            </Menu.Item>
            <SubMenu  icon={<ToolOutlined />} title="Device Status">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item icon={<RollbackOutlined/>}>Backups</Menu.Item>
            <SubMenu icon={<TeamOutlined />} title="Teams">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>

        </>
    );
}

export default Sider;