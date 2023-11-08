import React, { useEffect, useState } from 'react';
import Availabledetails from './Availabledetails';
import { BsSearch, } from "react-icons/bs";
import { Helmet } from 'react-helmet';

const Availablefoods = () => {
    const [foods, setFoods] = useState([]);
    console.log(foods)

    const url = 'https://assingment11-projects-server.vercel.app/foods';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handlesearch = () => {
        console.log('search btn')
        const inputvalue = document.getElementById('src-btn').value;
        const findfoods = foods.filter(food => food.foodname == inputvalue)
        setFoods(findfoods)
    }

    const handlesort = () => {
        const sortsfoods = [...foods].sort((a, b) => b.expiredtime - a.expiredtime);
        setFoods(sortsfoods)
    }


    return (
        <div className='mt-10'>
            <Helmet>
                <title>Available foods</title>
            </Helmet>
            <div className=" text-center font-parmanent">
                <h3 className=" text-3xl font-bold text-orange-400 italic">Avvailavlefoods Foods</h3>
                <h3>This is our al availablefoods.There are many foods.This is represent the highest <br />quantity of food.If you see all foods click show all button</h3>
            </div>
            <div className=' flex items-center justify-between gap-10 my-10'>
                <div className=' flex items-center mr-10'>
                    <input type="text" placeholder="Type here" id='src-btn' className="input input-bordered w-80" />
                    <h2 className='btn btn-outline' onClick={handlesearch}><BsSearch></BsSearch></h2>
                </div>
                <div>
                    <button className=' btn btn-neutral' onClick={handlesort}>Sort</button>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-2 mt-5'>
                {
                    foods.map(food => <Availabledetails
                        key={food._id}
                        food={food}
                    ></Availabledetails>)
                }
            </div>
        </div>
    );
};

export default Availablefoods;