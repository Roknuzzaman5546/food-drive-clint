import { Link } from 'react-router-dom';
import errorimg from  '../assets/1_DeBkx8vjbumpCO-ZkPE9Cw.png'
const Errorpage = () => {
    return (
        <div>
            <img className=' h-screen m-auto' src={errorimg} alt="" />
            <Link to='/'><button className=' btn btn-lg'>Go to home</button></Link>
        </div>
    );
};

export default Errorpage;