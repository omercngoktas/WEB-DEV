import React from 'react';
import SideBar from '../components/sidebar';
import {LayoutHeader} from '../components/layoutHeader';
import {AdminComponents, CustomerComponents, HumanSourceComponents} from '../components/doHomeComponents';

const Home = () =>  { 
    let x = localStorage.getItem("Id").charAt(0);
    return(
        <> 
            <SideBar />
            {
            window.location.pathname === '/do' ?
            <>
               {
                ((x === "M") || (x === "A")) ? 
               
                    <LayoutHeader icon='digital ocean' header='Do' subheader="Merhabalar, Do'ya hoşgeldiniz"/>
                    :   
                    <LayoutHeader icon='rendact' header='River' subheader="Merhabalar, River'a hoşgeldiniz"/>
               }

                    {x === "A" ? <AdminComponents/>:null}
                    
                    {x === "M" ? <CustomerComponents/>:null}

                    {x === "H" ? <HumanSourceComponents/>:null}

            </> 
            :null
            }

        </>
    )
}

export {Home};