import React, {Component} from 'react';
import CookieConsent from "react-cookie-consent";

class CookieTR extends Component {
    render(){
        return(
        <CookieConsent
            location="bottom"
            buttonText="Kabul Ediyorum"
            cookieName="userPolicyAccepted"
            style={{ background: "#2b373be6", padding:"10px" , zIndex:'10000'}}
            buttonStyle={{ color: "#4e503b", fontSize: "13px"}}
            expires={365}>
            Kişisel verilerin korunması hakkında aydınlatma metnimizdeki amaçlarla sınırlı ve mevzuata uygun şekilde çerez konumlandırıyoruz. 
            Detaylı bilgi için çerez politikamızı ve kişisel verilen korunması hakkında 
            <a href={'/kvkk/Mefar_Cerez_Aydinlatma_KVKK_Politikasi.pdf'}> bilgilendirme metnimizi</a>  inceleyebilirsiniz.
        </CookieConsent>
        )
    }
}

export {CookieTR};
