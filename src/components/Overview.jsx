import React from 'react';
import {Col,Form,Row,Select } from 'antd';
import {Chart as ChartJS,Tooltip,Legend, ArcElement} from 'chart.js';
import { Pie} from 'react-chartjs-2';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement,Tooltip,Legend);

const Overview = () => {
    
    //mockdata for chart
    let students = 1273;
    let classes = 361;
    let teachers = 316;
    let courses = 225;

     const chartData = {
        labels:["Students","Classes","Teachers","Courses"],
        datasets:[
            {
                label:"Total",
                data:[students,classes,teachers,courses],
                backgroundColor:[
                    '#205CA2',
                    '#00C6A2',
                    '#F66C7D',
                    '#70BBFD'
                ],
                borderColor:[
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderWidth:1,
            },
        ],
    };
     
    const options = {
        plugins:{
            legend:{
                display:true,
                position:"bottom"
            }
        }
    }
   
    
    //mockdata for terms
    const terms = ["Term 1","Term 2","Term 3"];

    return(
        <>
            <Form>
                <Row>
                    <Col span={6}>
                     <Form.Item label="Select Term">
                         <Select 
                             options={terms.map(elem=>{
                                 return {label:elem, value:elem}
                             })}
                             placeholder={"--Select Term"}
                         >
                        </Select>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div class="container grid grid-cols-3 gap-4">
         
             <div class="col-span-1 flex flex-col bg-white shadow-md p-4 space-y-3">
              <h2 class="mb-2 font-bold text-1xl">
                NUMBER OF ENROLLED STUDENTS
              </h2>
              <p class="text-md text-justify">
                Total Students
              </p>
              <h2 class="mb-2 font-bold-600 text-sky-800 text-4xl">
               {students.toLocaleString()}
              </h2>
              <div class="flex flex-wrap mt-auto text-blue-600 pt-3 text-xs underline">
                <Link class="mr-2 mb-2" to={"#"}>View Details</Link>
              </div>
             </div>
       
             <div class="col-span-1 flex flex-col bg-white shadow-md p-4 space-y-3">
              <h2 class="mb-2 font-bold text-1xl">
                NUMBER OF TEACHERS
              </h2>
              <p class="text-md text-justify">
                Total Teachers
              </p>
              <h2 class="mb-2 font-bold-600 text-red-400 text-4xl">
               {teachers}
              </h2>
              <div class="flex flex-wrap mt-auto text-blue-600 pt-3 text-xs underline">
                <Link class="mr-2 mb-2" to={"#"}>View Details</Link>
              </div>
             </div>
            
            <div class="col-span-1 row-span-2 flex flex-col bg-white shadow-md p-4">
                <h2 class="mb-2 font-bold text-1xl">
                ACADEMIC YEAR OVERVIEW
                </h2>
                 <Pie data={chartData} options={options} className="mt-5"/>
            </div>
         
            <div class="col-span-1 flex flex-col bg-white shadow-md p-4 space-y-3">
                <h2 class="mb-2 font-bold text-1xl">
                    NUMBER OF CLASSES
                </h2>
                <p class="text-md text-justify">
                    Total Classes
                </p>
                <h2 class="mb-2 font-bold-600 text-emerald-400 text-4xl">
                {classes}
                </h2>
                <div class="flex flex-wrap mt-auto text-blue-600 pt-3 text-xs underline">
                    <Link class="mr-2 mb-2" to={"#"}>View Details</Link>
                </div>
            </div>
            <div class="col-span-1 flex flex-col bg-white shadow-md p-4 space-y-3">
                <h2 class="mb-2 font-bold text-1xl">
                    NUMBER OF COURSES
                </h2>
                <p class="text-md text-justify">
                    Total Courses
                </p>
                <h2 class="mb-2 font-bold-600 text-sky-300 text-4xl">
                {courses}
                </h2>
                <div class="flex flex-wrap mt-auto text-blue-600 pt-3 text-xs underline">
                    <Link class="mr-2 mb-2" to={"#"}>View Details</Link>
                </div>
            </div>
            </div>
        </>
        
    )
};
export default Overview;

