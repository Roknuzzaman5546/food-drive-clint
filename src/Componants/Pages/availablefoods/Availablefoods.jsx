import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Availabledetails from './Availabledetails';
import { BsSearch, } from "react-icons/bs";

const Availablefoods = () => {

    const loadfoods = useLoaderData();
    const [foods, setFoods] = useState(loadfoods)

    const handlesearch = () =>[
        console.log('search btn')
        
    ]

    const handlesort = () =>{
        loadfoods.sort((a,b) => b.expiredtime - a.expiredtime);
        setFoods(loadfoods)
    }


    return (
        <div className='mt-10'>
            <div className=" text-center">
                <h3 className=" text-3xl font-bold text-orange-400 italic">Avvailavlefoods Foods</h3>
                <h3>This is our al availablefoods.There are many foods.This is represent the highest <br />quantity of food.If you see all foods click show all button</h3>
            </div>
                <div className=' flex items-center justify-between gap-10 my-10'>
                    <div className=' flex items-center mr-10'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-80" />
                        <h2 className='btn btn-outline' onClick={handlesearch}><BsSearch></BsSearch></h2>
                    </div>
                    <div>
                        <button className=' btn btn-neutral' onClick={handlesort}>Sort</button>
                    </div>
                </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-2 mt-5'>
                {
                    foods.map(food => <Availabledetails
                    food={food}
                    ></Availabledetails>)
                }
            </div>
        </div>
    );
};

export default Availablefoods;