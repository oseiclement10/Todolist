import  React from 'react';
import { BoilingVerdict } from './BoilingVerdict';
import TempInput from './TempInput';

export default class CalculateTemps extends React.Component{
    constructor(props){
            super(props)
            
            this.state={
                scale:'c',
                temperature:''
            } 

            this.onCelsiusChanged = this.onCelsiusChanged.bind(this);
            this.onFarenheitChanged=this.onFarenheitChanged.bind(this);
     }
     toCelsius(fahrenheit){
            return (fahrenheit - 32) * 5 / 9;
     }
     toFahrenhiet(celsius){
            return (celsius * 9 / 5) + 32;
     }
     
     onCelsiusChanged(value){
        console.log(value);
         this.setState({
            scale:'c',
            temperature:value,
         })
     }
     onFarenheitChanged(value){
       
        this.setState({
            scale:'f',
            temperature:value,
         })
     }
        
        render(){
            let scale = this.state.scale;
            let celsius = (scale==='c')?this.state.temperature:this.toCelsius(this.state.temperature);

            let farenheit=(scale==='f')?this.state.temperature:this.toFahrenhiet(this.state.temperature);

            return(
                <div className='flex flex-col p-5 items-center space-y-12'>
                    <h1 className='text-4xl font-bold text-center text-slate-600'>
                         Testing Controlled Components and Lifting State Up
                    </h1>
                    <TempInput title="celsius" onTempChanged={this.onCelsiusChanged} value={celsius}/>
                    <TempInput title="farenheit" onTempChanged={this.onFarenheitChanged} value={farenheit}/>
                    <BoilingVerdict/>
                </div>

            )
       }           
}