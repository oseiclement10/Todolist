import React,{useReducer, useState} from "react";
import {Row,Col,Table,Button,Modal,notification} from 'antd';
import { MdEdit,MdDelete,MdOutlineRadioButtonUnchecked } from "react-icons/md";
import  {BsCheckCircleFill} from "react-icons/bs";
 

const TodoList = () => {


    // Table Statuses

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

    


  
    // table data

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
        title: 'Action',
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

    //todo actions
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
    const [todos,dispatch] = useReducer(reducer,initialTodos);

    const [ID,setID] = useState(initialTodos.length+1);

    const clearTodo = () => setTodoMessage("");

    const addTodo = (todo) => {
       if(todo){
        dispatch({
            type:"ADD",
            id:ID,
            activity:todo
        })
        setID(oldId=>oldId+1)
        setIsEditable(false);
        clearTodo();
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
            <div className=" main-container h-full w-full fixed">

                <div className="w-3/4 bg-white p-12 rounded-lg drop-shadow-md h-7/8 opacity-95 overflow-y-hidden space-y-8 mx-auto mt-5 lg:w-2/4">
                    <div className="beforeTable space-y-8">
                        <div className="header pb-3">
                            <h1 className="text-3xl text-slate-700 text-center font-bold md:text-4xl md:text-left">
                                Clemzy's Todo List
                            </h1>
                        </div>

                        
                        <div className="flex mt-3 space-x-2 md:space-x-4">
                            
                          
                                <input 
                                    type="text" 
                                    className="rounded-md p-1 w-4/6 md:w-3/6" 
                                    placeholder="...type here" 
                                    value={todoMessage}
                                    onChange={handleTextChange}
                                />
                
                        
                            <button
                                className={isEditable?
                                    "rounded-md  bg-slate-700 text-white hoverable px-5 py-1 md:px-3"
                                    :"rounded-md bg-slate-500 text-white cursor-no-drop px-5 py-1 md:px-3"
                                }
                               
                                onClick={()=>addTodo(todoMessage)}
                            >
                                Add 
                            </button>
                           
                        </div>

                    </div>
                    
                    {/* Table */}
                    <Row>
                        <Col span={24}>
                            <Table
                             size="small"
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
                      <input type="text" className="rounded-md w-4/6 p-1 border-gray-400 md:w-3/6" value={modalInfo.activity} onChange={handleTextEdit}/>
                      
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

export default TodoList;