import img1 from '../../../assets/Extra1 (1).jpg'
import img2 from '../../../assets/Extra1 (2).jpg'

const Extraone = () => {
    return (
        <div className='mt-10 mb-20'>
            <div className=' flex items-center gap-5 md:flex-row flex-col-reverse'>
                <div className='flex relative w-full'>
                    <img className='md:w-[500px] w-[200px] md:h-[500px] h-[200px] rounded-md' src={img1} alt="" />
                    <img className='md:w-[300px] w-[150px] absolute md:left-64 left-20 md:top-64 top-20 rounded-md shadow-lg border-2 border-pink-400' src={img2} alt="" />
                </div>
                <div className=''>
                    <h3 className=' mb-5 text-3xl font-bold font-parmanent text-pink-400'>Donation your food in <br />food drive</h3>
                    <p className=' font-rancho'>You can benefit others by selling your food. If you want, you can donate your food to a poor person from our site. You don't have to pay any fee" and you will also get many rewards. You get to donate from the comfort of your own home.</p>
                </div>
            </div>
        </div>
    );
};

export default Extraone;