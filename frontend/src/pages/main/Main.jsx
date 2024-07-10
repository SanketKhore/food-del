import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/home/Home";
import Menu from "../../components/menu/Menu";
import { Auth0Provider } from '@auth0/auth0-react';
export default function Main(){
    return(
        <>
            <Auth0Provider
            domain="dev-r2xhtpvlkpohheid.us.auth0.com"
            clientId="IRIR0qWUnG05U2Ztss1nCxYDicjBEogt"
            authorizationParams={{
              redirect_uri: window.location.origin
            }}>
                <Navbar/>
            </Auth0Provider>
            
            <Home/>
            <Menu/>
        </>
    )
}