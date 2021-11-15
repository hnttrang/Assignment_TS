import './style.scss';
import React from 'react';
import { useContext } from 'react';
export interface Props{
    name: string,
    data : {}
    result: [],
    
}

const Display = (props: Props) => {
    const {
        result: []
    } = props;
    return (
        <section className="right-side">
        <div className="display">
          <h5>Tip Amount <br/> <p>/ people</p></h5>
          <h1 id="tipAmount">{}</h1>
        </div>
        <div className="display">
          <h5>Total <br/> <p>/ people</p></h5>
          <h1 id="total">{}</h1>
        </div>
        <div className="container">
          <button
          disabled={true}
          onClick = {e =>{
            e.preventDefault();
            
          }}
          >RESET</button>
          <button type='button'
          disabled={true}
          onClick = {e => {
            e.preventDefault();

          }}
          >CAL</button>
        </div>
      </section>
    );
  };
  export default Display;