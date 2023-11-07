import Banner from "./Banner";
import Featuredfoods from "./Featuredfoods";

const Home = () => {
    return (
        <div className=" w-11/12 mx-auto">
            <Banner></Banner>
            <Featuredfoods></Featuredfoods>
        </div>
    );
};

export default Home;