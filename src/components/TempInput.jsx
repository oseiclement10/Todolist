import React from "react";

export default class TempInput extends React.Component{
   constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
   }
   handleChange(e){
 
        let data = e.target.value;
        this.props.onTempChanged(data);
   }
    render(){
        return(
            <fieldset>
                <p className="pb-4">Enter temperature in {this.props.title}</p>
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}