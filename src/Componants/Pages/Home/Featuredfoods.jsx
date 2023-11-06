import { useEffect, useState } from "react";
import FeaturedfoodsDetails from "./FeaturedfoodsDetails";
import { Link } from "react-router-dom";

const Featuredfoods = () => {
    const [featuredfoods, setfeaturedfoods] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setfeaturedfoods(data))
    }, [])
    
    return (
        <div className="mt-10">
            <div className=" text-center">
                <h3 className=" text-3xl font-bold text-orange-400 italic">Featured Foods</h3>
                <h3>This is our featured foods.There are many foods.This is represent the highest <br />quantity of food.If you see all foods click show all button</h3>
            </div>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-2 mt-5">
                {
                    featuredfoods.slice(0,6).map(foods => <FeaturedfoodsDetails
                    foods={foods}
                    ></FeaturedfoodsDetails>)
                }
            </div>
            <Link to='/availablefoods'><button className=" btn btn-outline btn-accent my-10">Show all foods</button></Link>
        </div>
    );
};

export default Featuredfoods;