import React, { useContext } from 'react';
import MyTableComponent from './Mytable';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../../Authprovider/Authprovider';


const MyPage = () => {
  const { user } = useContext(Authcontext)
  const foods = useLoaderData();
  const filterfoods = foods.filter(food => food.useremail == user.email)
  console.log(filterfoods)
  
  const data = [
    {
      name: 'John',
      age: 30,
      city: 'New York',
    },
    {
      name: 'Alice',
      age: 28,
      city: 'Los Angeles',
    },
    // Add more data rows as needed
  ];
  
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
  ];

  return (
    <div>
      <h1>React Table Example</h1>
      <MyTableComponent data={data} columns={columns}></MyTableComponent>
    </div>
  );
};

export default MyPage;
