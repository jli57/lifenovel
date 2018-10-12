const FOOTERS = ['Sign Up',
'Log In',
'Messenger',
'Facebook Lite',
'Mobile',
'Find Friends',
'People',
'Pages',
'Video Interests',
'Places',
'Games',
'Locations',
'Marketplace',
'Groups',
'Instagram',
'Local',
'About',
'Create Ad',
'Create Page',
'Developers',
'Careers',
'Privacy',
'Cookies',
'Ad Choices',
'Terms',
'Account Security',
'Login Help',
'Help',
'Settings'];

export const FOOTER_LINKS = (
  FOOTERS.map( (footerText ) => {
    let footerLink = footerText.toLowerCase();
    if ( footerText === "Sign Up" || footerText === "Log In") {
      footerLink = footerLink.replace(" ", "");
    } else {
      footerLink= footerLink.replace(" ", "_");
    }
    return { footerText, footerLink };
  })
);
