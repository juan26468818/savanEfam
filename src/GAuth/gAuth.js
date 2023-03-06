import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {clientId} from "./config"
const GAuth = ()=>{
    return(
        <GoogleOAuthProvider clientId={clientId}>



            <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
        </GoogleOAuthProvider>
    );
}

export default GAuth