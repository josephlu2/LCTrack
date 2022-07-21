import React from "react"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Navbar = () => {

    

    return ( 
        
        <><BrowserView>
           <nav>
            
            <h1>LCTrack</h1>
            <p class = "message">This site uses localstorage to save notes. This means it will not work in incognito mode or with certain extensions! Thanks!</p>
        </nav>
        </BrowserView><MobileView>
        <nav>
            
            <h1>LCTrack</h1>
            <p class = "message">This site does not run properly on mobile devices! Please view on a full-screen desktop!</p>
        </nav>
            </MobileView></>
     );
}
 
export default Navbar;
