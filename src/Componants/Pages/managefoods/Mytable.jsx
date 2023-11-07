import { useContext } from "react";
import MyPage from "./MyPage";
import { useLoaderData } from "react-router-dom";

const Mytable = () => {
    const {user} = useContext()
    const foods = useLoaderData()
    const data = foods.map(food => food.donaremail ==  user.email)
    console.log(data)

    return (
        <div>
            <h1>Dynamic Table Example</h1>
            <MyPage data={data}></MyPage>
        </div>
    );
};

export default Mytable;