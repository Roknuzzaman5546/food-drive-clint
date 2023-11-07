import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../../Authprovider/Authprovider";
import Swal from "sweetalert2";

const Singlefoods = () => {
    const { user } = useContext(Authcontext)
    const foods = useLoaderData();
    const { _id, foodphoto, foodname, foodquantity, pickuplocation, expiredtime, donarname, donarphoto, donaremail, additionalnotes } = foods;

    const handlerequest = event => {
        event.preventDefault();
        const form = event.target;
        const foodphoto = form.foodphoto.value;
        const foodname = form.foodname.value;
        const foodid = form.foodid.value;
        const donaremail = form.donaremail.value;
        const donarname = form.donarname.value;
        const useremail = form.useremal.value;
        const requestdate = form.requestdate.value;
        const pickuplocation = form.pickuplocation.value;
        const expireddate = form.expireddate.value;
        const additionalnotes = form.additionalnotes.value;
        const donationmony = form.donationmony.value;
        const requestfoods = { foodphoto, foodname, foodid, donaremail, donarname, useremail, requestdate, pickuplocation, expireddate, additionalnotes, donationmony }
        fetch('http://localhost:5000/requestfoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestfoods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Request Successfull!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
        console.log('this is me', requestfoods)
    }

    return (
        <div>
            <div>
                <h2 className=" font-bold text-2xl mb-2">Donar</h2>
                <div className=" flex flex-col items-center">
                    <img src={donarphoto} alt="" />
                    <h2 className=" font-bold"><span className="text-xl">Name:</span> {donarname}</h2>
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
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-accent font-bold text-white">Request</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box text-black">
                                <form onSubmit={handlerequest}>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Food Image</span>
                                        </label>
                                        <input type="text" name="foodphoto" value={foodphoto} className="file-input file-input-bordered w-full" />
                                    </div>
                                    <div className=" flex md:flex-row flex-col gap-7">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Food Name</span>
                                            </label>
                                            <input type="text" name="foodname" value={foodname} className="file-input file-input-bordered w-full " />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Food Id</span>
                                            </label>
                                            <input type="text" name="foodid" value={_id} className="file-input file-input-bordered w-full" />
                                        </div>
                                    </div>
                                    <div className=" flex md:flex-row flex-col gap-7">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Food donator email</span>
                                            </label>
                                            <input type="text" name="donaremail"
                                                value={donaremail}
                                                className="file-input file-input-bordered w-full " />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Food donar Name</span>
                                            </label>
                                            <input type="text" name="donarname" value={donarname} className="file-input file-input-bordered w-full" />
                                        </div>
                                    </div>
                                    <div className=" flex md:flex-row flex-col gap-7">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">User email</span>
                                            </label>
                                            <input type="text" name="useremal" value={user.email} className="file-input file-input-bordered w-full" />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Request Date</span>
                                            </label>
                                            <input type="text" name="requestdate" value={user.metadata.lastSignInTime} className="file-input file-input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className=" flex md:flex-row flex-col gap-7">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Pickup location</span>
                                            </label>
                                            <input type="text" name="pickuplocation" value={pickuplocation} className="file-input file-input-bordered w-full" />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Expired date</span>
                                            </label>
                                            <input type="text" name="expireddate" value={expiredtime} className="file-input file-input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className=" flex md:flex-row flex-col gap-7">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Additonal notes</span>
                                            </label>
                                            <input type="text" name="additionalnotes" defaultValue={additionalnotes} className="file-input file-input-bordered w-full " />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Donation Money</span>
                                            </label>
                                            <input type="text" name="donationmony" placeholder="donation mony" className="file-input file-input-bordered w-full" />
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <div className="form-control w-full mt-4">
                                                <input type="submit" value="Request" className=" btn file-input-bordered w-full" />
                                            </div>
                                        </form>
                                    </div>
                                </form>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlefoods;