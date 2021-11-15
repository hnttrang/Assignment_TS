import dollar from "../assets/icon-dollar.svg";
import person from "../assets/icon-person.svg";
import React, {} from "react";
import  "./style.scss";
import { IInputValue, inputData } from "../pages/home";

const InputValue = (props: IInputValue) => {
    const {
        data,

    } = props
    console.log(data);
    

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
                
                <div className="input-bar">
                    <img src={dollar} alt="icon-dollar"/>
                    <input type="number" 
                    name="bill"
                    placeholder="0"
                    onKeyPress = {e =>{
                        preventOperator(e);
                    }}
                    onChange = {e => {
                        props.handleChange(e);
                    }}/>
                </div>
                <p>Select tip %</p>
                <div className="tip-pad">
                            {
                    tippad.flat().map((btn, idx) => {
                    return (
                        <button
                        key = {idx}
                        className = {btn === props.data.tip ? "percent-button percent-button__target" : "percent-button"}
                        // className='percent-button'
                        value = {btn}
                        onClick = {(e) => {
                            e.preventDefault();
                            props.handleTip(btn);
                        }}>
                        {btn}%
                        </button>
                    ) 
                    })}
                    <input id='cus-tip'
                    name="tip" 
                    className={tippad.flat().includes(props.data.tip) ? "percent-button" : "percent-button percent-button__target"} 
                    //className="percent-button"
                    placeholder='CUSTOM' type='number'
                    onKeyPress = {e => {
                        preventOperator(e);
                    }}
                    onClick = { (e) => {
                        e.preventDefault();
                        props.handleTip(parseFloat(e.currentTarget.value));
                    }}
                    onChange = {e =>{
                        props.handleChange(e);
                    }}/>
                </div>

                <p>Number of People</p>
                <div className= "input-bar">
                    <img src={person} alt="icon-person"/>
                    <input 
                    name = "people"
                    type="number" placeholder="0"
                    onKeyPress = {e => {
                        preventOperator(e);
                        preventFloat(e);
                    }}
                    onChange = {e => {
                        props.handleChange(e);
                    }} />
                </div>
            </form>
        </div>
        
    );
}

export default InputValue;