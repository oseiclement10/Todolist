import React from 'react';
import { Radio, Space, Tabs } from 'antd';
import Overview from './Overview';
import ClassList from './ClassList';


 const SessionDashboard = () => {
    const {TabPane} = Tabs;
    return (
      <Tabs
        className='mt-2'
        tabPosition="left"
        size='small'
        defaultActiveKey='1'
        // items={new Array(5).fill(null).map((_, i) => {
        //   const id = String(i + 1);
        //   return {
        //     label: `Tab ${id}`,
        //     key: id,
        //     children: `Content of Tab ${id}`,
        //   };
        // })}
        tabBarStyle={{
            color:"#6699CC"
        }}
        tabBarGutter={0}
      >
       <TabPane tab="OVERVIEW" key="1">
            <Overview/>
       </TabPane>

       <TabPane tab="Classes" key="2">
            <ClassList/>
       </TabPane>
       
       <TabPane tab="Students" key="3">
        
       </TabPane>
       <TabPane tab="Courses" key="4">
        
       </TabPane>
       <TabPane tab="Fees" key="5">
        
        </TabPane>
        <TabPane tab="Timetable" key="6">
        
        </TabPane>
        <TabPane tab="Year Breakdown" key="7">
        
        </TabPane>

      </Tabs>
  );
};

export default SessionDashboard;