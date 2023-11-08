import { useState } from "react";

const RequestDetails = ({ food }) => {
    const { _id, foodphoto, foodname, foodid, donaremail, donarname, requestedemail, requestdate, pickuplocation, expireddate, additionalnotes, donationmony, status } = food;

    const handledelet = id =>{
        console.log('request delelt submit', id)
    }

    return (
        <tbody>
            <tr className="bg-base-200">
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