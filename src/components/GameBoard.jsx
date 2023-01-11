import {useState} from 'react';

const GameBoard = () => {

    let preset = Object.assign({},new Array(9).fill("")); 
    let [tickType,setTickType] = useState("X");
    let [boxValue,setBoxValue] = useState(preset);
    let [user,setUser] = useState("1");
    let [isGameWon,setGameWon] = useState(()=>false);
    let [winner,setWinner] = useState(()=>"");
    
    function handleClick(elemid){
           
        if(boxValue[elemid]){
            return;
        }
        
        setTickType(()=>(tickType === "X")?"O":"X");
        boxValue[elemid]=tickType;
        console.log(tickType);
        setBoxValue({...boxValue});
        
        if(calculateWinner(boxValue,tickType,user)){
            setGameWon(()=>true)
        };
        setUser(()=>(user==="1")?"2":"1");
    }
  
    function checkWin(usermoves,winmoves){
        let count = 0;
        let len = winmoves.length;

        for(let i=0; i<len;i++){
            if(usermoves.includes(winmoves[i])){
                count++;
            }
            if(count===3){
                return true;
            }
        }
        return false;
    }

    function resetFields(){
        setGameWon(()=>false);
        setUser(()=>"1");
        setTickType("X");
        setBoxValue(preset);
    }

    function calculateWinner(data,userDesc,user){
        
        let winPositions = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
        let userMoves = Object.values(data)
            .map((elem,index)=>{
                return (elem===userDesc)?index:null;
        }).filter(elem=>typeof elem==="number");
      
        let len = winPositions.length;
        
        for(let i=0; i<len; i++){
            if(checkWin(userMoves,winPositions[i])){
                setWinner(user);
                return true;
            }
        }

        return false;
    }

    return (
        <div className="gameboard">
            <div className='my-4'>
                <h2 className='underline font-bold text-2xl mb-3'>TIC TAC TOE</h2>
                 {isGameWon ?
                    <>
                        <p> User {winner} won </p>
                        <button className="rounded bg-red-600 border" onClick={resetFields}>Reset</button>
                    </>     :

                    <p className='text-center'> User {user}'s Turn </p>
 
                 }
               
            </div>

          

            <div className="row">
                <button className="box" onClick={()=>handleClick(0)} disabled={isGameWon}>{boxValue[0]}</button>
                <button className="box" onClick={()=>handleClick(1)} disabled={isGameWon}>{boxValue[1]}</button>
                <button className="box" onClick={()=>handleClick(2)} disabled={isGameWon}>{boxValue[2]}</button>
           </div>

            <div className="row">
                <button className="box" onClick={()=>handleClick(3)} disabled={isGameWon}>{boxValue[3]}</button>
                <button className="box" onClick={()=>handleClick(4)} disabled={isGameWon}>{boxValue[4]}</button>
                <button className="box" onClick={()=>handleClick(5)} disabled={isGameWon}>{boxValue[5]}</button>  
            </div>

           
            <div className="row">
                <button className="box" onClick={()=>handleClick(6)} disabled={isGameWon}>{boxValue[6]}</button>
                <button className="box" onClick={()=>handleClick(7)} disabled={isGameWon}>{boxValue[7]}</button>
                <button className="box" onClick={()=>handleClick(8)} disabled={isGameWon}>{boxValue[8]}</button>
            </div>      
        </div>
    )

}



export default GameBoard;

//Instead of calculating the winner vigorously like i did , all i need is to check whether that particular point exists