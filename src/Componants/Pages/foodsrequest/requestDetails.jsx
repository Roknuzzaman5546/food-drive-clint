import { useState } from "react";
import Swal from "sweetalert2";

const RequestDetails = ({ food, filterfoods, setfoods }) => {
    const { _id, foodphoto, foodname, foodid, donaremail, donarname, requestedemail, requestdate, pickuplocation, expireddate, additionalnotes, donationmony, status } = food;

    const handledelet = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cencel it!'
        }).then(() => {
            fetch(`https://assingment11-projects-server.vercel.app/requestfoods/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Cenceldd!',
                            'Your file has been Canceld.',
                            'success'
                        )
                    }
                    const remaing = filterfoods.filter(cof => cof._id !== id)
                    setfoods(remaing)
                })
        })
    }

    return (
        <tbody>
            <tr className="bg-base-200 font-bold">
                <th>{foodname}</th>
                <td>{pickuplocation}</td>
                <td>{expireddate}</td>
                <td>{requestdate}</td>
                <td>{donationmony}</td>
                <td>{status}</td>
                <td>
                    <button className="btn btn-circle" disabled={status === 'delivered'} onClick={() => handledelet(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default RequestDetails;