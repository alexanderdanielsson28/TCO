import React from 'react';

import withAuthorization from './withAuthorization';

const AboutUsPage = () =>
  <div>
    <h1>About Us</h1>
    <p>The About us Page is accessible by every signed in user.</p>
    <p>Good luck Nils</p>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AboutUsPage);