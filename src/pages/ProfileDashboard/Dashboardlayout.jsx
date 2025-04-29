import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { CgProfile } from "react-icons/cg";
import { RxCodesandboxLogo } from "react-icons/rx";
import { RiArrowLeftBoxLine } from "react-icons/ri";
import { LuSquareArrowRight } from "react-icons/lu";
import { FaPowerOff } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { MdPersonalInjury } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";

const Dashboardlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen w-screen ">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        // style={{ backgroundColor: "red" }}
        className="bg-gray-500"
      >
        <div className="h-16 flex items-center justify-center text-white text-4xl">
          <RxCodesandboxLogo />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1-1"]}
          defaultOpenKeys={["1"]}
          style={{ backgroundColor: "bg-gray-200" }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
              children: [
                {
                  key: "1-1",
                  icon:<MdPersonalInjury />,
                  label: (
                    <Link to="/dashboard/profile/personal">
                      Personal Information
                    </Link>
                  ),
                },
                {
                  key: "1-2",
                  icon: <MdMarkEmailUnread/>,
                  label: (
                    <Link to="/dashboard/profile/email">Email Address</Link>
                  ),
                },
                {
                  key: "1-3",
                  icon:<FaMobileRetro />,
                  label: (
                    <Link to="/dashboard/profile/mobile">Mobile Numbers</Link>
                  ),
                },
              ],
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Security",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Setting",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex items-center bg-white px-4 shadow"
          style={{ background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={
              collapsed ? (
                <LuSquareArrowRight className="text-3xl text--red-500" />
              ) : (
                <RiArrowLeftBoxLine className="text-3xl text--red-500" />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            className="text-lg"
          />
          <div className="flex items-center space-x-4 ml-auto">
            <div>
              <CgProfile className="text-3xl text--red-500" />
            </div>
            <div>
              <FaPowerOff className="text-2xl text-red-500" />
            </div>
          </div>
        </Header>
        <Content
          className="m-6 p-6 bg-white rounded-lg shadow"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
            maxHeight: "calc(100vh - 64px - 48px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboardlayout;
