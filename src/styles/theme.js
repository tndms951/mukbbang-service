const devicesSizes = {
  mobile: '800px'
  // tablet: '1000px'
};

const device = {
  mobile: `screen and (max-width: ${devicesSizes.mobile})`
  // tablet: `screen and (max-width: ${devicesSizes.tablet})`
};

const theme = {
  device
};

export default theme;
