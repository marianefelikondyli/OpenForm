import { createGlobalStyle } from 'styled-components';

interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    secondaryMain: string;
    secondaryDark: string;
    secondaryLight: string;
    error: string;
    warning: string;
    success: string;
    info: string;
  };
  background: {
    paper: string;
  };
  boxShadow: {
    light: string;
    basic: string;
    thick: string;
  };
  text: {
    main: string;
    secondary: string;
    disabled: string;
  };
  mode: string;
}

const theme: Theme = {
  colors: {
    primary: '#007BFF', // Bright blue
    primaryLight: '#82b1e5', // Bright blue
    secondaryLight: '#F0F0F0', // Very light gray
    secondaryMain: '#E0E0E0', // Light gray
    secondaryDark: '#B0B0B0', // Medium gray
    error: '#D32F2F', // Bright red
    warning: '#FFA000', // Amber
    success: '#388E3C', // Green
    info: '#1976D2', // Deep blue
  },
  background: {
    paper: '#FFFFFF', // White
  },
  boxShadow: {
    light: '0px 1px 3px rgba(0, 0, 0, 0.12)',
    basic: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    thick: '0px 6px 10px rgba(0, 0, 0, 0.24)',
  },
  text: {
    main: '#212121', // Very dark gray (almost black)
    secondary: '#757575', // Dark gray
    disabled: '#BDBDBD', // Light gray
  },
  mode: 'light',
};

export default theme;

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: 'Roboto';
    --line-height: 1.5;
    --font-size: 1rem;
    --font-weight: 400;
    --color-scheme: light;
    --font-synthesis: none;
    --text-rendering: optimizeLegibility;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
    --webkit-text-size-adjust: 100%;
  }
  
  html, body {
     background: whitesmoke;
  }
  

  @font-face {
    font-family: 'Roboto';
    src: url('/font/Roboto-Regular.woff') format('woff'), url('/font/Roboto-Regular.eot') format('embedded-opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/font/Roboto-Medium.woff') format('woff'), url('/font/Roboto-Medium.eot') format('embedded-opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/font/Roboto-Bold.woff') format('woff'), url('/font/Roboto-Bold.eot') format('embedded-opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/font/Roboto-ExtraBold.woff') format('woff'), url('/font/Roboto-ExtraBold.eot') format('embedded-opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 800;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/font/Roboto-Black.woff') format('woff'), url('/font/Roboto-Black.eot') format('embedded-opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 900;
  }
  
  
  html,body,#root{
    margin: 0;
    padding: 0;
  }
  
  #root{
    font-family: var(--font-family);
    line-height: var(--line-height);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    color-scheme: var(--color-scheme);
    font-synthesis: var(--font-synthesis);
    text-rendering: var(--text-rendering);
    -webkit-font-smoothing: var(--webkit-font-smoothing);
    -moz-osx-font-smoothing: var(--moz-osx-font-smoothing);
    -webkit-text-size-adjust: var(--webkit-text-size-adjust);
  }
`;
