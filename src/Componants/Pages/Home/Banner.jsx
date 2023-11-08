// import React from 'react';
// import Carousel from 'react-elastic-carousel'; // Import the Carousel component
// import 'react-elastic-carousel/dist/styles.css'; // Import the carousel styles

// // Import your banner images
// import banner1 from '../../../assets/banner1.jpeg';
// import banner2 from '../../../assets/banner2.jpeg';
// import banner3 from '../../../assets/banner3.jpeg';
// import banner4 from '../../../assets/banner4.jpeg';

// const Banner = () => {
//     // Define your carousel items
//     const items = [
//         {
//             id: 'slide1',
//             image: banner1,
//             text: 'Available Food for Donation',
//         },
//         {
//             id: 'slide2',
//             image: banner2,
//             text: 'Available Food for Donation',
//         },
//         {
//             id: 'slide3',
//             image: banner3,
//             text: 'Available Food for Donation',
//         },
//         {
//             id: 'slide4',
//             image: banner4,
//             text: 'Available Food for Donation',
//         },
//     ];

//     return (
//         <div className='mt-10'>
//             <Carousel>
//                 {items.map((item) => (
//                     <div key={item.id} className="carousel-item relative w-full">
//                         <img src={item.image} className="w-full rounded-lg" />
//                         <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
//                             <div className='text-white pl-7 space-y-5'>
//                                 <h2 className=' text-6xl font-bold'>{item.text}</h2>
//                                 <p>There are many Food of passages available, but the majority have suffered alteration in some form of food donation.</p>
//                                 <div>
//                                     <button className='btn btn-error'>Featured Food</button>
//                                     <button className='btn btn-outline ml-2'>Latest Food</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default Banner;



import banner1 from '../../../assets/banner1.jpeg'
import banner2 from '../../../assets/banner2.jpeg'
import banner3 from '../../../assets/banner3.jpeg'
import banner4 from '../../../assets/banner4.jpeg'

const Banner = () => {
    return (
        <div className='mt-10'>
            <div className="carousel w-full md:h-[600px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-lg" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Available Food for   <br />Donation</h2>
                            <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn btn-outline ml-2'>Latest Food</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Available Food for   <br />Donation</h2>
                            <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn btn-outline ml-2'>Latest Food</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Available Food for   <br />Donation</h2>
                            <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn btn-outline ml-2'>Latest Food</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Available Food for   <br />Donation</h2>
                            <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn btn-outline ml-2'>Latest Food</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;