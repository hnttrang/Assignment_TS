import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";
import React, {SyntheticEvent} from "react";
import  "./styles.scss";
import { inputData } from "../pages/home";
export interface Props{
    data: inputData
}


const InputValue = (props: Props) => {

    const tippad = [
        [5, 10, 15],
        [20, 25]];

    const preventOperator = (e: React.KeyboardEvent<HTMLDivElement>) =>{
            if (e.key == '-' || e.key == '+'){
                e.preventDefault();
            }
        };
        //Int value
    const preventFloat = (e: React.KeyboardEvent<HTMLDivElement>) =>{
        if (e.key == '.'){
            e.preventDefault();
        }
    };

    return (
        <div className="input">
            <form id="input-form" 
                onSubmit={e => {
                    //submitForm();
                }}>
                <p>Bill</p>
                
                <div className="input">
                    <img src={dollar} alt="icon-dollar"/>
                    <input type="number" 
                    placeholder="0"
                    onKeyPress = {e =>{
                        preventOperator(e);
                    }}
                    onChange = {e => {
                        //setData({...data, bill: parseFloat(e.target.value)});
                    }}/>
                </div>
                <p>Select tip %</p>
                <div className="tip-pad">
                            {
                    tippad.flat().map((btn, idx) => {
                    return (
                        <button
                        key = {idx}
                        //className = {btn == data.tip ? "percent-button percent-button__target" : "percent-button"}
                        className='percent-button'
                        value = {btn}
                        onClick = {(e) => {
                        // e.preventDefault();
                        // setData({...data, tip: parseFloat(btn)});
                        }}>
                        {btn}%
                        </button>
                    ) 
                    })}
                    <input id='cus-tip' 
                    //className={tippad.flat().includes(data.tip) ? "percent-button" : "percent-button percent-button__target"} 
                    placeholder='CUSTOM' type='number'
                    onKeyPress = {e => {
                        preventOperator(e);
                    }}
                    onClick = { (e) => {
                        //setData({...data, tip: parseFloat(e.target.value)});
                    }}
                    onChange = {e =>{
                        //setData({...data, tip: parseFloat(e.target.value)});
                    }}/>
                </div>

                <p>Number of People</p>
                <div className= "input-bar">
                    <img src={person} alt="icon-person"/>
                    <input 
                    type="number" placeholder="0"
                    onKeyPress = {e => {
                        preventOperator(e);
                        preventFloat(e);
                    }}
                    onChange = {e => {
                        //setData({...data, people: parseFloat(e.target.value)});
                    }} />
                </div>
            </form>
        </div>
        
    );
}

export default InputValue;