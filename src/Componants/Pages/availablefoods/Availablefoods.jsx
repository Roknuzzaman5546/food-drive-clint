import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Availabledetails from './Availabledetails';

const Availablefoods = () => {
    const foods = useLoaderData();

    return (
        <div>
            <div className=" text-center">
                <h3 className=" text-3xl font-bold text-orange-400 italic">Avvailavlefoods Foods</h3>
                <h3>This is our al availablefoods.There are many foods.This is represent the highest <br />quantity of food.If you see all foods click show all button</h3>
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