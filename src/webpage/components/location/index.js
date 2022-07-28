import React from 'react';
 
const Location  = () => {
        return (
            <div style={{position:'relative',overflow:'hidden'}}>
                <a href="https://yandex.com.tr/harita/org/birgi_mefar_ilac_sanayi_a_s_/11592192766/?utm_medium=mapframe&utm_source=maps" 
                style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>Birgi Mefar İlaç Sanayi A. Ş.</a>
                <a href="https://yandex.com.tr/harita/115703/pendik/category/industrial_enterprise/?utm_medium=mapframe&utm_source=maps" 
                 style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Pendik için Sanayi kuruluşu</a>
                <iframe title="Map" src="https://yandex.com.tr/map-widget/v1/-/CCQ-e4UsLD" width="100%" height="450" frameborder="1" allowfullscreen="true" style={{position:'relative',border:'none'}}></iframe>
            </div>
        );
}

export default Location