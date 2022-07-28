import React from 'react';
import {NavbarFragile as Header} from '../components/navbar';
import DashBoard from '../components/dashboard';

const HomePage = () =>  {
        return(
            <>
            <Header/>
            {
              window.location.pathname === '/fragile' ?
              <DashBoard />
              :null
              }
          
            </>
        )
    }
export {HomePage};