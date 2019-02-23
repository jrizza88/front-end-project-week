

const size = {
    mobileS: '310px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptopS: '999px',
    laptopM: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const Device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptopS: `{max-width: ${size.laptopS}}`,
    laptopM: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };

