import React from 'react';
const banner = require('../assets/images/banner.png');

function AppBanner() {
  return(
    <div className="banners">
      <img src={banner} alt="banner" />
    </div>
  );
};

export default AppBanner;
