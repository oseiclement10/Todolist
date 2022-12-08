import React, { useState } from "react";

import { Layout, Menu, Avatar, Space, Dropdown } from "antd";

import Logo from "./images/Logo.png";

import { NavLink, Navigate } from "react-router-dom";


import {
  MdOutlineDashboard,
  MdOutlinePeopleOutline,
  MdOutlineNaturePeople,
  MdOutlineEditCalendar,
  MdOutlinePeople,
  MdOutlineRecordVoiceOver,
  MdOutlineCalendarToday,
  MdOutlineSettings,
  MdOutlineRoomPreferences,
} from "react-icons/md";

import { RiUserSettingsLine } from "react-icons/ri";

import { GoBook } from "react-icons/go";

import { VscFileSymlinkDirectory } from "react-icons/vsc";

import { BiUser, BiBuildings } from "react-icons/bi";
import {
  BsLadder,
  BsFileRuled,
  BsFileEarmarkText,
  BsBuilding,
} from "react-icons/bs";

import { DownOutlined } from "@ant-design/icons";

import { FaRegMoneyBillAlt } from "react-icons/fa";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const removeUser = ()=>{
    return "real";
}
const items = [
  // DASHBOARD
  getItem("Dashboard", "sub1", <MdOutlineDashboard />, [
    getItem(
      <NavLink to="/users">Users</NavLink>,
      "1",
      <MdOutlinePeopleOutline />
    ),
    getItem(
      <NavLink to="/classes">Classes</NavLink>,
      "2",
      <MdOutlineNaturePeople />
    ),
    getItem(<NavLink to="/billing">Fees</NavLink>, "3", <FaRegMoneyBillAlt />),
  ]),

  // ACADEMIC YEAR MANAGEMENT
  getItem("Academic Year Management", "sub2", <MdOutlineEditCalendar />, [
    getItem(
      <NavLink to="/academic-session">Academic Session Mngnt</NavLink>,
      "4",
      <MdOutlineCalendarToday />
    ),
    getItem(
      <NavLink to="/academic-records">Academic Records Mngnt</NavLink>,
      "5",
      <BsFileRuled />
    ),
    getItem(
      <NavLink to="/student-records">Student Records Mngnt</NavLink>,
      "6",
      <MdOutlineRecordVoiceOver />
    ),
  ]),

  // USER MANAGEMENT
  getItem("User Management", "sub3", <BiUser />, [
    getItem(
      <NavLink className="user-management-tour" to="/subusers">
        <span className="user-management-tour">Sub-User Management</span>
      </NavLink>,
      "7",
      <MdOutlinePeople />
    ),
    getItem(
      <NavLink to="/roles-and-permissions">Roles & Permissions</NavLink>,
      "8",
      <MdOutlineSettings />
    ),
  ]),

  // GENERAL ACADEMIC INFORMATION
  getItem("General Academic Information", "sub4", <BsFileEarmarkText />, [
    getItem(<NavLink to="/classes">Stages</NavLink>, "9", <BsLadder />),
    getItem(<NavLink to="/courses">Courses</NavLink>, "10", <GoBook />),
  ]),

  // Campus and Facilities
  getItem("Campus Facilities", "sub7", <BsBuilding />, [
    getItem(
      <NavLink to="/buildings">Buildings</NavLink>,
      "17",
      <BiBuildings />
    ),
    getItem(
      <NavLink to="/buildings">Rooms</NavLink>,
      "18",
      <MdOutlineRoomPreferences />
    ),
  ]),

  // BILLING
  getItem(
    <NavLink to="/billing">Billing</NavLink>,
    "11",
    <FaRegMoneyBillAlt />
  ),

  // ADMISSIONS
  getItem(
    <NavLink to="/admissions">Admissions</NavLink>,
    "20",
    <VscFileSymlinkDirectory />
  ),

  // PERSONAL
  getItem("Multiple Roles", "sub6", <RiUserSettingsLine />, [
    getItem(
      <NavLink to="/">Teacher Module</NavLink>,
      "12",
      <RiUserSettingsLine />
    ),
    getItem(
      <NavLink to="/">Parent Module</NavLink>,
      "13",
      <RiUserSettingsLine />
    ),
  ]),
];

const Wrapper = ({ children, header, subheader,alignment }) => {
  const [collapsed, setCollapsed] = useState(false);
  let user = [{
    lastname:"Osei Asante",
    firstname:"Clement",
    email:"clementoseiasante.nss@gmail.com"
  }]
  // dropdown data
  const dropdownMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <p disabled>
              {user[0].lastname} {user[0].firstname}
            </p>
          ),
        },
        {
          key: "2",
          label: (
            <NavLink to="/settings" className="nav-link">
              <span>Settings</span>
            </NavLink>
          ),
        },
        {
          key: "3",
          label: (
            <NavLink to="/" onClick={() => removeUser()} className="nav-link">
              <span>Log Out</span>
            </NavLink>
          ),
        },
      ]}
    />
  );

  return (
    <Layout
      hasSider
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        theme="light"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ height: "64px", padding: "20px" }}>
          <img src={Logo} alt="logo" style={{ width: "60px" }} />
        </div>

        {/* MAIN MENU SIDEBAR */}
        <Menu theme="light" mode="inline">
          {/* DASHBOARD */}
          <Menu.SubMenu className="campus-tour" title="Dashboard">
            <Menu.Item>
              <NavLink to="/campus">
                <MdOutlineDashboard /> Campuses
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="user-mngnt-tour" to="/users">
                <MdOutlinePeopleOutline /> User Management
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="" to="/billing">
                <MdOutlineDashboard /> Fees
              </NavLink>
            </Menu.Item>
          </Menu.SubMenu>

          {/* ACADEMIC YEAR MANAGEMENT */}
          <Menu.SubMenu title="Academic Year Management">
            <Menu.Item>
              <NavLink className="" to="#">
                <MdOutlineCalendarToday /> Academic Session Mngnt
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="" to="#">
                <BsFileRuled /> Academic Records Mngnt
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="" to="#">
                <MdOutlineRecordVoiceOver />
                Student Records Mngnt
              </NavLink>
            </Menu.Item>
          </Menu.SubMenu>

          {/* USER MANGEMENT */}
          <Menu.SubMenu title="User Management">
            <Menu.Item>
              <NavLink className="" to="#">
                <MdOutlinePeople /> Sub-User Mangemment
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="" to="#">
                <MdOutlineSettings /> Roles & Permissions
              </NavLink>
            </Menu.Item>
          </Menu.SubMenu>

          {/* campus and facilities */}
          <Menu.SubMenu title="Campuses & Facilities">
            <Menu.Item>
              <NavLink className="" to="/buildings">
                <BiBuildings />
                Buildings
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="" to="/rooms">
                <MdOutlineRoomPreferences /> Rooms
              </NavLink>
            </Menu.Item>
          </Menu.SubMenu>

          {/* GENERAL ACADEMIC INFORMATION*/}
          <Menu.SubMenu title="General Management">
            <Menu.Item>
              <NavLink className="" to="/classes">
                <BsLadder /> Stages
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink className="" to="/courses">
                <GoBook /> Courses
              </NavLink>
            </Menu.Item>
          </Menu.SubMenu>

          {/* BILLING */}
          <Menu.Item>
            <NavLink className="" to="/billing">
              <FaRegMoneyBillAlt />
              Billing
            </NavLink>
          </Menu.Item>

          {/* ADMISSIONS*/}
          <Menu.Item>
            <NavLink className="" to="/admissions">
              <VscFileSymlinkDirectory /> Admissions
            </NavLink>
          </Menu.Item>

          {/* PARENT AND TEACHER */}
        </Menu>

        {/* END OF MAN MENU SIDEBAR */}
      </Sider>

      <Layout
        className={`site-layout ${
          collapsed ? "adaptive-collapsed" : "adaptive"
        }`}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Space justify="end" align="center" className="wrapper-menu">
            <div>
              <h1>
                {header} {subheader}
              </h1>
            </div>

            <Space align="center">
              <Avatar style={{ color: "#1890ff", backgroundColor: "#94CCFF" }}>
                {user[0].firstname.substring(0, 2).toUpperCase()}
              </Avatar>
              <span>{user[0].email}</span>

              <Dropdown overlay={dropdownMenu}>
                <Space>
                  <DownOutlined className="cursorr" />
                </Space>
              </Dropdown>
            </Space>
          </Space>
        </Header>
        {/* some pages to move towards top */}
        {alignment==="top"?
           <Content style={{ margin: "1px 4px 0", overflow: "initial" }}>
            <div className="site-layout-background-main" style={{ padding: 16 }}>
             {children}
            </div>
           </Content>
          :
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
           <div className="site-layout-background-main" style={{ padding: 24 }}>
             {children}
           </div>
          </Content>
        }
       

      </Layout>
    </Layout>
  );
};
//};

export default Wrapper;
