import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../../Authprovider/Authprovider";
import RequestDetails from "./requestDetails";

const Foodsrequest = () => {
    const { user } = useContext(Authcontext)
    const requestfoods = useLoaderData();
    const filterfoods = requestfoods.filter(food => food.requestedemail == user.email)
    return (
        <div className="my-10">
            <div>
                <h3 className=" text-3xl text-pink-400 font-bold">Your all requested foods</h3>
            </div>
            <div>
                <div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Foodname</th>
                                <th>Pickup location</th>
                                <th>Expired date</th>
                                <th>Request date</th>
                                <th>Donation ammount</th>
                                <th>Status</th>
                                <th>Cancel request</th>
                            </tr>
                        </thead>
                        {
                            filterfoods.map(food => <RequestDetails
                                food={food}
                            ></RequestDetails>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Foodsrequest;