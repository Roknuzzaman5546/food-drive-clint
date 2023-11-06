import { useLoaderData } from "react-router-dom";

const Singlefoods = () => {
    const id = useLoaderData();
    console.log(id)
    return (
        <div>
            <h3>Single foods is here</h3>
        </div>
    );
};

export default Singlefoods;