import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types'

const SignedIn = ({children}) => {

    const {user} = useContext(AuthProvider)

    if(user){
        return <Navigate to="/"></Navigate>
    }

    return children;
};

export default SignedIn;
SignedIn.propTypes = {
    children: PropTypes.node
}