import { useState } from "react";

const RequestDetails = ({ food }) => {
    const { foodphoto, foodname, foodid, donaremail, donarname, requestedemail, requestdate, pickuplocation, expireddate, additionalnotes, donationmony, status } = food;

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
                    <button className="btn btn-circle" disabled={status === 'delivered'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default RequestDetails;