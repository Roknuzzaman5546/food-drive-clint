import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Featuredfoods from "./Featuredfoods";

const Home = () => {
    return (
        <div className=" w-11/12 mx-auto">
            <Helmet>
                <title>Food drive</title>
            </Helmet>
            <Banner></Banner>
            <Featuredfoods></Featuredfoods>
        </div>
    );
};

export default Home;