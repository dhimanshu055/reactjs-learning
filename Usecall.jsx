import React, { useCallback, useState } from 'react';
import UseCall2 from '../my-app/src/UseCall2'

const Usecall = () => {
    const [data, setData] = useState(0);
    const [count, setCount] = useState(0);

    const Demo = useCallback(() => {
        console.log("Demo function is memoized");
        // You can include some logic inside this function
    }, [count]);

    return (
        <div>
            
               <UseCall2 Demo={Demo} count={count}/>
            <h1>{data}</h1>
            <button onClick={() => setData(data + 1)}>Increment Data</button>

            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default Usecall;
