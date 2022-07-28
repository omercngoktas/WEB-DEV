import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const GoogleAnalytics = () => {
    const trackingId = "UA-168775853-1";
    const history = createBrowserHistory();
    ReactGA.initialize(trackingId);
    history.listen(location => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });
    ReactGA.set({
      userId: localStorage.getItem("Id"),
      userCityCode: localStorage.getItem("vCityCode"),
      userCountry: localStorage.getItem("vCountry"),
      userCity: localStorage.getItem("vCity")
    })  
}

export {GoogleAnalytics}