import {  Card, Flex, Layout, Menu, Typography } from "antd"
import "./styles/dashboard.css";
import { Header, Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { BiHomeHeart } from "react-icons/bi";
import { CgOrganisation } from "react-icons/cg";
import { HiUserPlus, HiUserGroup } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);
 

  return (

    <div>
      <Layout className="container">
        <Header className="header">
         <div className="header-content">
          <RxHamburgerMenu 
          onClick={()=> setCollapsed(!collapsed)} 
          style={{marginRight: 30}} />
          <div className="brand">stella</div>
         </div>
        </Header>
        <Layout>
          <Sider collapsed={collapsed} theme="light">
            <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <BiHomeHeart />,
                children: [{
                  label: "Add profile",
                  key: "add_profile",
                  icon: <HiUserPlus />
                },{
                  label: "All users",
                  key: "all_users",
                  icon: <HiUserGroup />
                }]
            },
              {
                label: "About us",
                key: "about_us",
                icon:<CgOrganisation />
              }
            ]}/>
          </Sider>
          <Content className="content">
            <Card>
              <Typography.Title>Sales</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eveniet sint asperiores, quibusdam non itaque sequi alias dolorum nulla dignissimos sed rerum ea, quaerat saepe quisquam exercitationem ipsa quis architecto.
              </Typography.Paragraph>
            </Card>
          </Content>
        </Layout>
        
      </Layout>


    </div>


  )
}

export default App
