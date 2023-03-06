import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
const GAuth = ()=>{
    return(
        <GoogleOAuthProvider clientId="264216297261-hfrpjat26iviqtd9ckhcep5ilm4p4btd.apps.googleusercontent.com">



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