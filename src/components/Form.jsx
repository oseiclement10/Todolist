import React from "react";

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }
    
    handleChange= function(e){   
        let element = e.target;

        if(element.type==="text"){

            this.setState({
                ['username']:element.value
            });

        }else if(element.type==="password"){

            this.setState({
                ['password']:element.value
            });

        }
       
    }
    submitFormHandler(e){
       console.log('data processed')
    }

    render(){
        return(
            <div className="container w-3/4 mx-auto border mt-5 p-3 bg-slate-100 md:w-1/2">
               
                <h1 className="font-bold text-3xl p-5 text-gray-700 text-center">
                    LogIn Form
                </h1>

                <div className=" flex items-center justify-center">
                   <img src="./img/itachi.jpg" alt="itachi" className="h-24 rounded-full" />
                </div>

                <form action="/checkTemps" name="login" className="flex flex-col items-center space-y-6" onSubmit={this.submitFormHandler}> 

                 <div className="input-container  pt-5 flex flex-col space-y-3 space-x-3 md:items-center md:flex-row md:space-y-0">
                    <label htmlFor="name" className="ml-4">Username:</label>
                    <input type="text" className="rounded-lg border-slate-400" name="username" id="name" onChange={this.handleChange} value={this.state.value} />
                 </div> 

                 <div className="input-container  flex flex-col space-y-3 space-x-3 md:items-center md:flex-row md:space-y-0">
                    <label htmlFor="name" className="ml-4">Password:</label>
                    <input type="password" className="rounded-lg border-slate-400" name="password" id="name" onChange={this.handleChange} value={this.state.value} />
                 </div> 
                 
                 <input type="submit" value="submit" className="rounded-lg cursor-pointer text-white bg-slate-800 hover:bg-slate-700  px-4 py-1" />

               </form>
            </div>
            
        )
    }
}