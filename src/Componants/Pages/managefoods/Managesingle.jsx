import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Managesingle = () => {
    const [load, setload] = useState(true);
    const managefoods = useLoaderData();
    const [requestfoods, setrequestfoods] = useState([]);

    useEffect(() => {
        fetch('https://assingment11-projects-server.vercel.app/requestfoods')
            .then(res => res.json())
            .then(data => setrequestfoods(data))
    }, [])
    
    const findfood = requestfoods?.find(food => food.foodname == managefoods.foodname)
    console.log(findfood)

    const handlework = id => {
        fetch(`https://assingment11-projects-server.vercel.app/requestfoods/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'delivered' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire(
                        'Updated!',
                        'Your file has been Updated.',
                        'success'
                    )
                    setload(false)
                }
            })
            fetch(`https://assingment11-projects-server.vercel.app/foods/${managefoods._id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div>
            {
                findfood ?
                    <div>
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src={findfood.requestedPhoto} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{findfood.requestedname}</h2>
                                <h2 className="card-title">{findfood.requestedemail}</h2>
                                <h2 className="card-title">{findfood.requestdate}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => handlework(findfood._id)}>Status <span className=" text-red-500 font-bold">{load ? ': Available' : ': Delivered'}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className=" text-3xl font-bold text-pink-400 font-parmanent my-20">No one has Requested your Fodds</div>
            }
        </div>
    );
};


export default Managesingle;