import { useContext } from "react";
import { Authcontext } from "../../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privet = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();
    
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default Privet;