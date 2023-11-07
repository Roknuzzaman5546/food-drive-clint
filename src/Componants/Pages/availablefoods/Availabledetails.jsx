import { Link } from "react-router-dom";

const Availabledetails = ({ food }) => {
    const { _id, foodphoto, foodname, foodquantity, pickuplocation, expiredtime, additionalnotes, donarname, donarphoto } = food;
    
    
    return (
        <div>
            <div className="card  bg-purple-200 shadow-xl">
                <figure><img src={foodphoto} className="w-[450px] h-[300px]" alt="Movie" /></figure>
                <div className="card-body flex flex-col items-center gap-2">
                    <div className=" border-2 border-teal-500 py-5 px-12 rounded-lg">
                        <h2 className=" text-xl font-bold">Donator</h2>
                        <div className=" flex items-center gap-10 mt-4">
                            <img className="w-14 rounded-full" src={donarphoto} alt="" />
                            <p className=" font-bold">{donarname}</p>
                        </div>
                    </div>
                    <h2 className="card-title text-3xl font-bold mt-4">{foodname}</h2>
                    <p className=" font-bold"><span className=" font-bold text-xl">Foodquantity</span>: {foodquantity} person</p>
                    <p className=" font-bold"><span className=" font-bold text-xl">Expiredtime</span>: {expiredtime} hour</p>
                    <p className=" font-bold"><span className=" font-bold text-xl">Location</span>: {pickuplocation}</p>
                    <p>{additionalnotes}</p>
                    <div className="card-actions mt-4">
                        <Link to={`foods/${_id}`}><button className="btn btn-primary">Veiw details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Availabledetails;