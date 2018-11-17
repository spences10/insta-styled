export const themes = {
  theme1: {
    primary: '#6e27c5',
    primaryAccent: '#eb238e',
    branding: '#f7e018',
    secondary: '#fcdeb6',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontHeader: 'Dancing+Script, sans-serif',
    fontBody: 'Glegoo, sans, sans-serif',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
    pink: '#ff0198',
    blue: '#01c1d6'
  },
  theme2: {
    primary: '#ff0198',
    primaryAccent: '#eb238e',
    branding: '#01c1d6',
    secondary: '#ffb617',
    background: '#e6e6e6',
    foreground: '#f7f0f0',
    border: '#054545',
    fontHeader: 'Lustria, sans, sans-serif',
    fontBody: 'Stint+Ultra+Condensed, sans-serif',
    fontDark: '#034544',
    fontLight: '#596869',
    fontWhite: '#ffffff',
    pink: '#ff52ba',
    blue: '#59eeff'
  },
  theme3: {
    primary: '#1cbcd2',
    primaryAccent: '#69479e',
    branding: '#f16623',
    secondary: '#ffb617',
    background: '#f3eff5',
    foreground: '#88d4d8',
    border: '#055455',
    fontHeader: 'Work+Sans, sans, sans-serif',
    fontBody: 'Metrophobic, sans-serif',
    fontDark: '#0d0a0b',
    fontLight: '#454955',
    fontWhite: '#ffffff',
    pink: '#ff73c7',
    blue: '#00e5ff'
  }
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script:400,700|Glegoo:400,700|Lustria:400,700|Stint+Ultra+Condensed:400,700|Work+Sans:400,700|Metrophobic:400,700|Taviraj:400,700');
  
  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`
