import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Featuredfoods from "./Featuredfoods";
import Extraone from "./Extraone";
import Extratwo from "./Extratwo";

const Home = () => {
    return (
        <div className=" w-11/12 mx-auto">
            <Helmet>
                <title>Food drive</title>
            </Helmet>
            <Banner></Banner>
            <Featuredfoods></Featuredfoods>
            <Extraone></Extraone>
            <Extratwo></Extratwo>
        </div>
    );
};

export default Home;