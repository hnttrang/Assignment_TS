import './style.scss';
import React from 'react';
import { useContext } from 'react';
import { inputData } from '../pages/home';
export interface Props{
    result: any,
    isCalc: boolean,
    onSubmit: () => void,
    validateInput: () => boolean
}

const Display = (props: Props) => {
    const {
        result,
        isCalc,
        onSubmit,
        validateInput
    } = props;

    //console.log();
    
    return (
        <section className="right-side">
        <div className="display">
          <h5>Tip Amount <br/> <p>/ people</p></h5>
          <h1 id="tipAmount">{result.amount}</h1>
        </div>
        <div className="display">
          <h5>Total <br/> <p>/ people</p></h5>
          <h1 id="total">{result.total}</h1>
        </div>
        <div className="container">
          <button
          disabled={true}
          onClick = {e =>{
            e.preventDefault();
            
          }}
          >RESET</button>
          <button type='button'
          disabled={!validateInput()}
          onClick = {e => {
            e.preventDefault();
            onSubmit();
          }}
          >CAL</button>
        </div>
      </section>
    );
  };
  export default Display;