import React, {Component} from 'react';
import CookieConsent from "react-cookie-consent";

class Cookie extends Component {
    render(){
        return(
            <CookieConsent
                location="bottom"
                buttonText="I accept"
                cookieName="userPolicyAccepted"
                style={{ background: "#2b373be6", padding:"10px", zIndex:'10000' }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px"}}
                expires={365}>
                We use cookies on the protection of personal data, limited to the purposes in our text, and in compliance with the legislation.
                For detailed information, you can review our <a href={'/kvkk/Mefar_Cerez_Aydinlatma_KVKK_Politikasi.pdf'}> cookie policy</a> about personal protection.{" "}
            </CookieConsent>
        )
    }
}

export {Cookie};
