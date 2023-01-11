import React from "react";

import { Helmet } from "react-helmet";

import { Tabs, Col, Row } from "antd";

// layout
import Wrapper from "./Wrapper";
import  SessionDashboard  from "./SessionDashboard";

export const AcademicSessionMgmt = () => {
  
  return (
    <Wrapper header="Academic Session Management" alignment="top">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AEIS - ACADEMIC SESSION MGMT</title>
      </Helmet>
      <Row>
        <Col span={24}>
         
          <Tabs
            defaultActiveKey="1"
            size="medium"
            tabBarStyle={{
               padding:"5px",
               background:"white",
               paddingLeft:"20px",
            }}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i);
              return {
                  label:`202${id} - 20${id+1}`,
                  key: id,
                  children:<SessionDashboard currentYear={id}/>,
              };
            })}
      />     
          {
            /* <Tabs defaultActiveKey="1">
            <TabPane tab="STAGES" key="1">
              <Stages />
            </TabPane>
            <TabPane tab="CLASSES" key="2">
              <AllClasses />
            </TabPane>
            <TabPane tab="CLASSROOMS" key="3">
              <Classrooms />
            </TabPane>
             </Tabs> */
          }

        </Col>
      </Row>
    </Wrapper>
  );
}

 