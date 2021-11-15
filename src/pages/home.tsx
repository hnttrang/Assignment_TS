import { useState } from "react";
import InputValue from "../components/InputValue";


export interface inputData{
    bill: number,
    tip: number,
    people: number,
    valid: boolean
}

const Home = () => {
    const [data, setData] = useState<inputData>({
        bill : 0,
        tip : 0,
        people : 0,
        valid : false,
    })

    return (
        <div className='homePage'>
            
        </div>
    );

}

export default Home;