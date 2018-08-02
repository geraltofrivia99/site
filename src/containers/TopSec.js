import React from 'react';

import Economy from '../components/Sections/EconomySavl';
import OneStopSec from '../components/Sections/OneStop';
import Ecosystem from '../components/Sections/Ecosystem';
import Upcomming from '../components/Sections/Upcomming';
import Secure from '../components/Sections/Secure';
import Inter from '../components/Sections/Inter';
import Subscibe from '../components/Sections/Subscribe';
import Footer from '../components/Sections/Footer';
import MainSection from '../components/Sections/MainSection';

const Dash = () => (
      <React.Fragment>    
        <MainSection />
        <Economy />
        <OneStopSec />
        <Ecosystem />
        <Upcomming />
        <Secure />
        <Inter />
        <Subscibe />
        <Footer />
      </React.Fragment>
);

export default (Dash);
// scrollUp = () => {
//   window.scroll({
//     top: 0,
//     behavior: "smooth"
//   });
// }