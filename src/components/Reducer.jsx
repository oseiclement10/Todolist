import React,{useReducer, useState} from "react";
import {Row,Col,Table,Button,Modal,notification} from 'antd';
import { MdEdit,MdDelete,MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useEffect } from "react";
import  {BsCheckCircleFill} from "react-icons/bs";
 

const Reducer = () => {

   const Done = ({trigger}) => (
            <div className="ant-center w-1/2">
                <BsCheckCircleFill style={{color:"green",cursor:"pointer"}} onClick={trigger} />
            </div>
        )
    const Pending = ({trigger}) => (
             <div  className="ant-center w-1/2">
                <MdOutlineRadioButtonUnchecked style={{color:"orange",cursor:"pointer"}} onClick={trigger}/>
            </div> 
        )
    const Cancelled = ({text}) => {
        return <del>
                {text}
               </del>
    }
 
    const [todoMessage,setTodoMessage] = useState("");
    const [loading,setLoading] = useState(false);
    const [isEditable,setIsEditable] = useState(false);


    let initialTodos = [
        {   id:1,
            key:'1',
            activity: 'Go to Church',
            complete:0,
          },
          {
            id:2,
            key:'2',
            activity: 'Prepare Notes',
            complete:1,
          },
          {
            id:3,
            key:'3',
            activity: 'Visit James',
            complete:0,
          },
          {
            id:4,
            key:'4',
            activity: 'Read',
            complete:0,
          },
          {
            id:5,
            key:'5',
            activity: 'Visit James',
            complete:1,
          },
          {
            id:6,
            key:'6',
            activity: 'Draw Plan',
            complete:0,
          },
    ]
    const [ID,setID] = useState(initialTodos.length+1);

    const clearTodo = () => setTodoMessage("");

    const reducer = (state,action) => {
            switch(action.type){
               case "ADD":
                 let todo = {
                    id:action.id,
                    number:state.length,
                    activity:action.activity,
                    key:action.id,
                    complete:0
                }
                 clearTodo();
                 return [...state,todo];
               case "DELETE":
                return state.filter(elem=>elem.id!==action.id);
               
                case "TOGGLECOMPLETE":
                return state.map(elem=>{
                    if(elem.id===action.id){
                        return {...elem,complete:!elem.complete}
                    }else return elem
                });
               
                case "EDIT":
                 return state.map(elem=>{
                    if(elem.id===action.id){
                        return {...elem,activity:action.activity,complete:action.complete}
                    }else{ 
                        return elem;
                    }
                 })

               default: return state;  
            }
    }
  
    const columns = [
    {   
        title:"#",
        dataIndex:"number",
        key:"number"
    },
    {
        title: 'Todo ',
        dataIndex: 'activity',
        key: 'activity',
        render:(_,record)=>(record.complete)?<Cancelled text={record.activity}/>: record.activity,
    },
    {
        title: 'Status',
        dataIndex: 'complete',
        key: 'complete',
        render:(_,record)=>(record.complete) ?
                <Done trigger={()=>toggleComplete(record)}/>
                :
                <Pending trigger={()=>toggleComplete(record)}/>
    },
    {
        title: 'Actions',
        dataIndex:'actions',
        render:(_,record)=>{
            return(
                <div className="ant-center">
                   
                    
                    <Button
                     className="ant-center bg-"
                     type="text"
                     icon={<MdEdit/>}
                     onClick={()=>displayModal("edit",record)}
                    />
                    <Button
                     className="ant-center bg-"
                     type="text"
                     icon={<MdDelete/>}
                     onClick={()=>displayModal("delete",record)}
                    
                    />
        
                </div>
                
            )
        }
    },
    ];

    const [todos,dispatch] = useReducer(reducer,initialTodos);

    
    const addTodo = (todo) => {
       if(todo){
        dispatch({
            type:"ADD",
            id:ID,
            activity:todo
        })
        setID(oldId=>oldId+1)
        setIsEditable(false);
        notification["success"]({
            message:"Added Todo",
            duration:1,
        });
       }else{
        return ""
       }
    }

    const removeTodo = (todo) => {
        setButtonLoading(true);
        dispatch({
            type:"DELETE",
            id:todo.id,
        })
        setButtonLoading(false);
        closeModal();
        notification["success"]({
            message:"deleted ",
            duration:1
        })
    }

    const editTodo = (todo) => {
        setButtonLoading(true);
        dispatch({
            type:"EDIT",
            id:todo.id,
            activity:todo.activity,
            complete:todo.complete
        })
        setButtonLoading(false);
        closeModal();
        notification["success"]({
            message:"updated",
            duration:1
        })
    }

    const toggleComplete = (todo) => {
        dispatch({
            type:"TOGGLECOMPLETE",
            id:todo.id,
        })
    } 

    const handleTextChange = (e) => {
        if(e.target.value){
            setIsEditable(true);
        }else{
            setIsEditable(false);
        }
        setTodoMessage(e.target.value);
    }

    const handleTextEdit = (e) => {
        setModalInfo({...modalInfo,activity:e.target.value})
    }

    // Modal for editing and deleting todo
  const [isModalOn,setIsModalOn] = useState(false);
  const [buttonLoading,setButtonLoading] = useState(false);
  const [modalInfo,setModalInfo] = useState({activity:"",complete:0});
  const [modalTitle,setModalTitle] = useState("");
  
  const [isEditMode,setEditMode] = useState(null);

 // Delete Modal Controls

 const displayModal = (type,record) => {
  
  let modalText = (type==="edit")? "Edit Todo" : "Delete Todo";
   
    setModalTitle(modalText);
    setModalInfo(record); 
    setEditMode(type==="edit");
    setIsModalOn(true);
 }

 const closeModal = () => {
     setIsModalOn(false);
 }



    useEffect(()=>{

    },[loading])

    let dataSource = [];
    if(!loading){
        todos.forEach((element,index) => {
            dataSource.push({
               ...element,number:index+1
            })
        });
    }

    return (
         
        <>
            <div className=" overall">

                <div className="container background space-y-8 mx-auto mt-5">
                    <div className="beforeTable space-y-8">
                        <div className="header pb-3">
                            <h1 className="text-4xl text-slate-700 font-bold">
                                Clemzy's Todo List
                            </h1>
                        </div>

                        
                        <div className="row mt-3 items-center space-x-6">
                            
                            <div className="">
                                <input 
                                    type="text" 
                                    className="rounded-md" 
                                    placeholder="...type here" 
                                    value={todoMessage}
                                    onChange={handleTextChange}
                                />
                            </div>

                        
                            <button
                                className={isEditable?
                                    "rounded-md p-2 bg-slate-700 text-white hoverable"
                                    : "rounded-md p-2 bg-slate-500 text-white cursor-no-drop"
                                }
                               
                                onClick={()=>addTodo(todoMessage)}
                            >
                                Add Todo
                            </button>
                           
                        </div>

                    </div>

                    <Row>
                        <Col span={24}>
                            <Table
                             loading={loading}
                             columns={columns}
                             dataSource={dataSource}
                             pagination={{pageSize:5}}
                             scroll={{
                                y:200
                            }}
                            >

                            </Table>
                        </Col>
                    </Row>

                </div>
                
                 {/*MODAL FOR DELETING/EDITING TODO's*/}

                <Modal 
                    title={modalTitle} 
                    open={isModalOn}
                    width={"40%"}
                    onCancel={closeModal}
                    footer={null}
                
                >
                    {isEditMode
                    ?
                    <div className="">
                    <div className="inp my-5">
                      <input type="text" className="rounded-md w-4/6 border-gray-400" value={modalInfo.activity} onChange={handleTextEdit}/>
                    </div>
                    
                    <div>
                            <Button
                            onClick={closeModal} className="mr-4">
                            Cancel
                            </Button>

                            <Button
                                disabled={buttonLoading}
                                className="edit-icon bg-blue-600 text-white outline-none"
                                onClick={() => editTodo(modalInfo)}
                            >
                            {buttonLoading? "Saving ..." : "Save"} 
                        </Button>
                    </div>
                    
                   </div>
                   :
                   <div>
                   <div className="mb-5">
                   <span className="p-2">
                           Are you sure you want to delete "
                           <span className="font-bold"> {modalInfo.activity}  </span>
                           <span>"</span>
                   </span>
                   </div>

                   <Button
                    onClick={closeModal} className="mr-4">
                        Cancel
                   </Button>

                   <Button
                       disabled={buttonLoading}
                       className="delete-icon bg-red-600 text-white outline-none"
                       onClick={() => removeTodo(modalInfo)}
                   >
                     {buttonLoading? "Deleting ..." : "Delete"} 
                   </Button>
                   </div>
                    }
                   

                 
                  
                
                </Modal>
                
            </div>
        </>
           
           )
}

export default Reducer;