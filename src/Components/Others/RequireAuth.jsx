import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import useFirebase from "./useFirebase";

const RequireAuth = ({children}) => {
    const {user, loading} = useFirebase();
    const location = useLocation();

    if(loading){
       return <Loading/>
    }

    if(!user){
       return <Navigate to='/signin' state={{from:location}} replace />
    }
    return children;
};

export default RequireAuth;