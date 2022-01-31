import React,{useState,useEffect} from 'react';
import "./style.css";
const UseState = () => {
    const [Mynum, setMynum] = useState(0);
    console.log(Mynum);

    useEffect(() => {
        document.title=`Count(${Mynum})`
    });
    
    return (
        <div>
            <div className='data'>
                <h1>{Mynum}</h1>
                <button onClick={() => setMynum(Mynum + 1)}>Increment</button>
                <button onClick={() => Mynum - 1>0 ? setMynum(Mynum - 1):setMynum(0)}>Decrement</button>
            </div>
        </div>
    );
};

export default UseState;

