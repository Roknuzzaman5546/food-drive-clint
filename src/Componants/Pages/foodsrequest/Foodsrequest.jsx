import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../../Authprovider/Authprovider";
import RequestDetails from "./requestDetails";

const Foodsrequest = () => {
        const {user} = useContext(Authcontext)
        const requestfoods = useLoaderData();
        const filterfoods = requestfoods.filter(food => food.requestedemail == user.email)
        console.log(filterfoods)
    return (
        <div>
            <div>
                <h3 className=" text-3xl text-pink-400 font-bold">Your all requested foods</h3>
            </div>
            <div>
                {
                    filterfoods.map(food => <RequestDetails
                    food={food}
                    ></RequestDetails>)
                }
            </div>
        </div>
    );
};

export default Foodsrequest;