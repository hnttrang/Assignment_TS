import {useState} from "react";
import InputValue from "../components/InputValue";
import Display from "../components/OutputDisplay";
import { API } from "../APIs";
import axios from "axios";
import "./home.scss";


export interface inputData{
    bill: number,
    tip: number,
    people: number,
    valid: boolean
}

export interface IInputValue{
    data: inputData,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    handleTip: (value: number)=>void
}

const Home = () => {
    const [data, setData] = useState<inputData>({
        bill : 0,
        tip : 0,
        people : 0,
        valid : false,
    });
    const [result, setResult] = useState<any>({
        amount: '00.00',
        total: '00.00',
    })

    const validateInput = () =>{
        if(data.bill == 0 || data.tip == 0 || data.people == 0) return false;
        // setData({
        //     ...data, valid : true
        // })
        return true;
    }

    const handleTip = (value: number)=>{
        setData({...data, tip : value});
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const name: string = e.target.name;
        const value: string = e.target.value;

        setData({
            ...data, [name] : parseFloat(value)
        });
     }

     const onSubmit = async () => {
		try {
			axios.get(`${API}?bill=${data.bill}&people=${data.people}&tipPercent=${data.tip}`).then((response) => {
				//console.log(response);
				setResult({
                    ...result,
					total: response.data.total.toFixed(2),
					amount: response.data.amount.toFixed(2)})
			  });
		} catch (error) {
			alert("Something has problems")
		}
    }

    return (
        <div className='home'>
            <InputValue
                data={data}
                handleChange={handleChange}
                handleTip={handleTip}
            ></InputValue>
            <Display
                result={result}
                isCalc={data.valid}
                onSubmit={onSubmit}
                validateInput={validateInput}
            ></Display>
        </div>
    );

}

export default Home;