import banner1 from '../../../assets/banner1.jpeg'
import banner2 from '../../../assets/banner2.jpeg'
import banner3 from '../../../assets/banner3.jpeg'
import banner4 from '../../../assets/banner4.jpeg'

const Banner = () => {
        return (
            <div className='mt-10 font-rancho'>
                    <div className="carousel w-full md:h-[600px] ">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={banner1} className="w-full rounded-lg" />
                            <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                                <div className='text-white pl-7 md:space-y-5'>
                                    <h2 className=' text-6xl font-bold'>Available Food for   Donation</h2>
                                    <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn ml-2 btn-accent'>Latest Food</button>
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
                        <div className='text-white pl md:space-y-5'>
                            <h2 className=' text-6xl font-bold'>Available Food for   <br />Donation</h2>
                            <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn ml-2 btn-accent'>Latest Food</button>
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
                        <div className='text-white pl md:space-y-5'>
                            <h2 className=' text-6xl font-bold'>Available Food for   <br />Donation</h2>
                            <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn ml-2 btn-accent'>Latest Food</button>
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
                        <div className='text-white pl md:space-y-5'>
                            <h2 className=' text-6xl font-bold'>Available Food for   <br />Donation</h2>
                            <p>There are many Food of passages of  available, but the majority <br /> have suffered alteration in some form fodd donation</p>
                            <div>
                                <button className=' btn  btn-error'>Featured Food</button>
                                <button className=' btn ml-2 btn-accent'>Latest Food</button>
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