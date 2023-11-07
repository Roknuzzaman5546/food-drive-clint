import { useContext } from "react";
import { Authcontext } from "../../../Authprovider/Authprovider";
import Swal from "sweetalert2";

const Addfood = () => {
    const { user } = useContext(Authcontext);

    const handleaddfoods = event => {
        event.preventDefault();
        console.log('foods add products')
        const form = event.target;
        const foodphoto = form.foodphoto.value;
        const foodname = form.foodname.value;
        const foodquantity = form.foodquantity.value;
        const pickuplocation = form.pickuplocation.value;
        const expiredtime = form.expiredtime.value;
        const additionalnotes = form.additionalnotes.value;
        const donaremail = user.email;
        const donarname = user.displayName;
        const donarphoto = user.photoURL;
        const status = 'available';
        const foods = {  donaremail, donarname, donarphoto, foodphoto, foodname, foodquantity, pickuplocation, expiredtime, additionalnotes, status }
        console.log(foods)
        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foods)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })
    }

    return (
        <div className=" my-10 bg-blue-400  pb-10 pt-5 rounded-lg">
            <div className=" text-center">
                <h2 className=" text-3xl text-gray-700 font-bold ">Add food for donat</h2>
                <h3 className=" mt-2">Please add your food for poor peapole. becouse they are not eating fulfil <br /> please help them.Its very helpfull work For our country</h3>
            </div>
            <div className=" w-2/3 mx-auto bg-blue-300 rounded-lg mt-10 p-10">
                <form onSubmit={handleaddfoods}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <input type="text" name="foodphoto" placeholder="Food Photo" className="file-input file-input-bordered w-full" />
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="foodname" placeholder="Food name" className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input type="text" name="foodquantity" placeholder="Food Quantity" className="file-input file-input-bordered w-full" />
                        </div>                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Pickup locaion</span>
                            </label>
                            <input type="text" name="pickuplocation" placeholder="Pickup location" className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Expired Time</span>
                            </label>
                            <input type="text" name="expiredtime" placeholder="Expired Time" className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <input type="text" name="additionalnotes" placeholder="Additional Notes" className="file-input file-input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value="Add" className=" btn file-input-bordered w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addfood;