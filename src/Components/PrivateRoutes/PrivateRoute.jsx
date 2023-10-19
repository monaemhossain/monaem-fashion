import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types'

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthProvider)

    if(user){
        return children;
    }

    return <Navigate to="/sign-in"></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}