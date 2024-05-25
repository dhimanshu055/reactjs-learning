import React, { useEffect, useState } from 'react';
import { baseUrl } from './Url';

const Basic = () => {
  const [data, setData] = useState([]); 

  const callApi = async() => {
    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      const res = await fetch(`${baseUrl}/learner/get/deposits/data`, requestOptions);
      const result = await res.json();

      if (result?.status === '001') {
        setData(result?.data);
        console.log('res', result);
      } else {
        alert('Error occurred');
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      {data?.map((item) => (
        <ul key={item.id}>
          <li>ID: {item.id}</li>
          <li>Amount: {item.amount}</li>
          <li>Date: {item.datetime}</li>
        </ul>
      ))}
    </>
  );
};

export default Basic;

