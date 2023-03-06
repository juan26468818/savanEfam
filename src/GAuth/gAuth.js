import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";




const GAuth = ()=>{
    const clientID = "264216297261-hfrpjat26iviqtd9ckhcep5ilm4p4btd.apps.googleusercontent.com"

    useEffect(() => {
        const start = () =>{
            gapi.auth2.init({
                clientId: clientID,
            })
        }

        gapi.load("client:auth2", start)
        
    }, []);

    const onSuccess = (response) =>{
        console.log(response)
    }
    const onFailure = (response) =>{
        console.log(response)
    }


    return(
        <div>
            <GoogleLogin 
                clientId={clientID}
                onSuccess= {onSuccess}
                onFailure= {onFailure}
                cookiePolicy={"single_host_policy"}
            />
        </div>    
    );
}

export default GAuth