import img1 from '../../../assets/extra2 (1).jpg'
import img2 from '../../../assets/extra2 (2).jpg'
import img3 from '../../../assets/extra2(3).jpg'
import img4 from '../../../assets/extra2 (1).png'
const Extratwo = () => {
    return (
        <div>
            <h3 className=' w-[400px] text-center inline-block mb-5 text-pink-600 text-4xl font-bold font-parmanent bg-blue-400 p-5 rounded-lg'>Our sponser</h3>
            <div className=' flex items-center md:flex-row flex-col gap-5'>
                <div className=' w-full'>
                    <div className=' text-center my-2 '>
                        <h2 className=' text-2xl text-pink-500 font-rancho'>Coca cola</h2>
                        <img className=' w-[400px]' src={img1} alt="" />
                    </div>
                    <div>
                        <h2 className=' text-2xl my-2 text-pink-500 font-rancho'>Pran</h2>
                        <img className=' w-[400px]' src={img2} alt="" />
                    </div>
                </div>
                <div >
                    <div>
                        <h2 className=' text-2xl my-2 text-pink-500 font-rancho'>Bashudhara</h2>
                        <img className=' w-[400px]' src={img3} alt="" />
                    </div>
                    <div>
                        <h2 className=' text-2xl my-2 text-pink-500 font-rancho'>Bd foos</h2>
                        <img className=' w-[400px]' src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extratwo;