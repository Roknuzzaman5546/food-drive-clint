import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updatefoods = () => {
    const updatefoods = useLoaderData();
    const { _id, donaremail, donarname, donarphoto, foodphoto, foodname, foodquantity, pickuplocation, expiredtime, additionalnotes } = updatefoods;

    const handleupdate = event => {
        event.preventDefault();
        console.log('foods add products')
        const form = event.target;
        const foodphoto = form.foodphoto.value;
        const foodname = form.foodname.value;
        const foodquantity = form.foodquantity.value;
        const pickuplocation = form.pickuplocation.value;
        const expiredtime = form.expiredtime.value;
        const additionalnotes = form.additionalnotes.value;
        const donaremail = form.donaremail.value;
        const donarname = form.donarname.value;
        const donarphoto = form.donarphoto.value;
        const foods = { donaremail, donarname, donarphoto, foodphoto, foodname, foodquantity, pickuplocation, expiredtime, additionalnotes }
        fetch(`http://localhost:5000/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        console.log(foods)
    }

    return (
        <div className="my-10 bg-orange-400  pb-10 pt-5 rounded-lg">
            <div className=" text-center">
                <h2 className=" text-3xl text-gray-700 font-bold font-parmanent">Update Your Foods</h2>
            </div>
            <div className=" w-2/3 mx-auto bg-orange-300 rounded-lg mt-10 p-10">
                <form onSubmit={handleupdate}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <input type="text" name="foodphoto" defaultValue={foodphoto} className="file-input file-input-bordered w-full" />
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="foodname" defaultValue={foodname} className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input type="text" name="foodquantity" defaultValue={foodquantity} className="file-input file-input-bordered w-full" />
                        </div>                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Pickup locaion</span>
                            </label>
                            <input type="text" name="pickuplocation" defaultValue={pickuplocation} className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Expired Time</span>
                            </label>
                            <input type="text" name="expiredtime" defaultValue={expiredtime} className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <input type="text" name="additionalnotes" defaultValue={additionalnotes} className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Donar photo</span>
                            </label>
                            <input type="text" name="donarphoto" value={donarphoto} className="file-input file-input-bordered w-full " />
                        </div>
                    </div>
                    <div className=" flex md:flex-row flex-col gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Donar email</span>
                            </label>
                            <input type="text" name="donaremail" value={donaremail} className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Donar name</span>
                            </label>
                            <input type="text" name="donarname" value={donarname} className="file-input file-input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value="Update" className=" btn file-input-bordered w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updatefoods;