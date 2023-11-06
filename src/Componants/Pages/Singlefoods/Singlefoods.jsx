import { useLoaderData } from "react-router-dom";

const Singlefoods = () => {
    const foods = useLoaderData();
    const { _id, foodphoto, foodname, foodquantity, pickuplocation, expiredtime,  username, userphoto } = foods;

    return (
        <div>
            <div>
                <h2 className=" font-bold text-2xl mb-2">Donar</h2>
                <div className=" flex flex-col items-center">
                    <img src={userphoto} alt="" />
                    <h2 className=" font-bold"><span className="text-xl">Name:</span> {username}</h2>
                    <h3 className=" font-bold"><span className=" text-xl">Pickup location:</span> {pickuplocation}</h3>
                </div>
            </div>
            <div>
                <div className=" text-center mt-10 mb-5">
                    <h2 className=" text-3xl font-bold italic">Food details</h2>
                </div>
                <div className=" flex items-center gap-10 justify-center">
                    <img className=" w-[500px] h-[400px] mr-10 rounded-md" src={foodphoto} alt="" />
                    <div className=" text-white flex flex-col gap-2 border border-teal-200 bg-slate-500 pb-16 px-16 pt-5 rounded-lg">
                        <h2 className=" text-3xl text-sky-600 font-bold mb-2 border-b-4 border-slate-800 pb-2">Details</h2>
                        <h3 className=" text-2xl font-bold">{foodname}</h3>
                        <h3 className=" font-bold"><span className=" text-xl">Food quantity:</span> {foodquantity}</h3>
                        <h3 className=" font-bold"><span className=" text-xl">Expired date:</span> {expiredtime}</h3>
                        <button className="btn btn-accent font-bold text-white">Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlefoods;