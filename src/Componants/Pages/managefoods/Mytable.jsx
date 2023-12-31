import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytable = ({ food, setfoods, filterfoods }) => {
    const { _id, donaremail, donarname, donarphoto, foodphoto, foodname, foodquantity, pickuplocation, expiredtime, additionalnotes, status } = food;

    const handledelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(() => {
            fetch(`https://assingment11-projects-server.vercel.app/foods/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
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
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={foodphoto} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{foodname}</div>
                            <div className="text-sm opacity-50">{donarname}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {pickuplocation}
                </td>
                <td>{expiredtime}</td>
                <td>{foodquantity}</td>
                <th>
                    <Link to={`/foods/${_id}`}><button className="btn btn-ghost btn-circle"><AiFillEdit></AiFillEdit></button></Link>
                </th>
                <th>
                    <button className="btn btn-circle" onClick={() => handledelete(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <Link to={`/manage/${_id}`}><td className='btn'>Manage</td></Link>
            </tr>
        </tbody>
    );
};

export default Mytable;

// import React, { useEffect, useMemo, useState } from 'react';
// import { useTable } from 'react-table';
// import axios from 'axios';
// import Tabledata from './Tabledata';

// const FoodTable = () => {
//     const columns = useMemo(
//         () => [
//             {
//                 Header: 'Food Name',
//                 accessor: 'foodname',
//             },
//             {
//                 Header: 'Quantity',
//                 accessor: 'foodquantity',
//             },
//             {
//                 Header: 'Pickup Location',
//                 accessor: 'pickuplocation',
//             },
//             {
//                 Header: 'Status',
//                 accessor: 'status',
//             },
//             {
//                 Header: 'useremail',
//                 accessor: 'useremail',
//             },
//             {
//                 Header: 'Delete',
//                 accessor: 'Delete',
//             },
//         ],
//         []
//     );

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://assingment11-projects-server.vercel.app/foods');
//                 setData(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable({
//         columns,
//         data,
//     });

//     return (
//         <div>
//             {loading ? (
//                 'Loading...'
//             ) : (
//                 <table {...getTableProps()} className="table">
//                     <thead>
//                         {headerGroups.map((headerGroup) => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {headerGroup.headers.map((column) => (
//                                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                                 ))}
//                             </tr>
//                         ))}
//                     </thead>
//                     <tbody {...getTableBodyProps()}>
//                         {rows.map((row) => {
//                             prepareRow(row);
//                             return (
//                                 <tr {...row.getRowProps()}>
//                                     {row.cells.map((cell) => {
//                                         return (
//                                             <>
//                                                 <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                             </>
//                                             // <Tabledata key={cell._id}
//                                             // cell={cell}
//                                             // ></Tabledata>
//                                         );
//                                     })}
//                                     <td>Remove</td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default FoodTable;
