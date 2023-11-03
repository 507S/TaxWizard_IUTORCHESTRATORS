import {
  CalculatorOutlined,
  DatabaseOutlined,
  HistoryOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
    UserOutlined,
    LineChartOutlined,
  UsergroupAddOutlined 
} from "@ant-design/icons";
import { Avatar, Badge, Button, Layout, Menu, Space, theme, Tag } from "antd";
import React, { useState } from "react";
import logo from "../../assets/icon2.png";
import userImage from "../../assets/user.jpg";

import DashboardSidebar from "./sideBar/DashboardSidebar";
import ProfileSideBar from "./sideBar/ProfileSideBar";
import TaxCalculationSidebar from "./sideBar/TaxCalculationSidebar";
import TaxHistorySidebar from "./sideBar/TaxHistorySidebar";
import DataVisualizationSidebar from "./sideBar/DataVisualizationSidebar";
import AddFamilySidebar from "./sideBar/AddFamilySidebar";
const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <DatabaseOutlined />,
    label: "Dashboard",
    component: <DashboardSidebar />,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Profile",
    component: <ProfileSideBar />,
  },
  {
    key: "3",
    icon: <CalculatorOutlined />,
    component: <TaxCalculationSidebar />,
    label: "Tax Calculation",
  },
  // Add the UserProfile component to the menu items
  {
    key: "4",
    icon: <HistoryOutlined />,
    component: <TaxHistorySidebar />,
    label: "Tax History",
  },
  {
    key: "5",
    icon: <LineChartOutlined />,
    component: <DataVisualizationSidebar />,
    label: "Visualize Data",
  },
  {
    key: "6",
    icon: <UsergroupAddOutlined />,
    component: <AddFamilySidebar />,
    label: "Add Family",
  },
  // Add more menu items here
];

const DashboardLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [show, setShow] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemClick = (key) => {
    // Handle menu item click by setting the selected component
    if (key === "1") {
      setSelectedComponent(<DashboardSidebar />);
    }
    if (key === "2") {
      setSelectedComponent(<ProfileSideBar />);
    }
    if (key === "3") {
      setSelectedComponent(<TaxCalculationSidebar />);
    }
    if (key === "4") {
      setSelectedComponent(<TaxHistorySidebar />);
      }
      if (key === "5") {
        setSelectedComponent(<DataVisualizationSidebar />);
      }
       if (key === "6") {
         setSelectedComponent(<AddFamilySidebar />);
       }
    // Add more menu item click handling as needed
  };

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical">
          {!collapsed && ( // Render only when sidebar is not collapsed
            <div
              style={{ fontSize: "18px", color: "white", padding: "12px 24px" }}
            >
              <img src={logo} alt="logo" width="30px" height="30px" /> TaxWizard
            </div>
          )}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleMenuItemClick(item.key)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? 80 : 200,
        }}
      >
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0",
            background: colorBgContainer,
          }}
        >
          <span
            onClick={toggleSider}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              padding: "20px",
              color: "black",
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Space size={5}>
              <Tag bordered={false} color="processing">
                Md Muktadir Mazumder
              </Tag>
              <Badge dot={show}>
                <Avatar
                  shape="circle"
                  src={userImage}
                  size={40}
                  icon={<UserOutlined />}
                />
              </Badge>
              <Button
                type="submit"
                icon={<LoginOutlined />}
                // onClick={handleLogout}
              >
                Logout
              </Button>
              {/* <Avatar
                shape="square"
                src={userImage}
                size={40}
                icon={<UserOutlined />}
              /> */}
            </Space>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            {selectedComponent}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            position: "fixed", // Fix the footer at the bottom
            bottom: 0, // Place it at the bottom
            width: "100%",
          }}
        >
          TaxWizard ©2023 Created by IUT_ORCHESTRATORS
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
