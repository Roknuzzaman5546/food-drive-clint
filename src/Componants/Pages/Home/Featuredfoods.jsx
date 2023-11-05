import { useEffect, useState } from "react";
import FeaturedfoodsDetails from "./FeaturedfoodsDetails";

const Featuredfoods = () => {
    const [featuredfoods, setfeaturedfoods] = useState([]);
    console.log(featuredfoods)

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
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-2">
                {
                    featuredfoods.slice(0,6).map(foods => <FeaturedfoodsDetails
                    foods={foods}
                    ></FeaturedfoodsDetails>)
                }
            </div>
        </div>
    );
};

export default Featuredfoods;