import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 1.125rem;
        line-height: 1.6;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        scroll-behavior: smooth;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-rendering: optimizeLegibility;
        background: ${({ theme }) => theme.body};    
        color: ${({ theme }) => theme.text};
        background-size: 400% 400%;
        background-position: var(--bg-position);
        transition: background-position 2s ease;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .separator::before {
        content: '•';
        color: white;
        padding: 0.4rem;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        color: white;
    }

    a:active {
        color: blueviolet;  
    }
`;
