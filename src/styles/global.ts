import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-brand-100: #4200FF;
    --color-white: #ffffff;
    --color-white-transparent: #FFFFFFF2;
    --color-grey: #F8F8F8;
    --color-grey-transparent: rgba(0, 0, 0, 0.2);
    --color-black: #000000;
    --color-black-transparent: rgba(0, 0, 0, 0.5);
    --color-alert:  #CE4646;
    --color-sucess: #4BA036;
    --color-logo: #4200FF80;

    --font-size-0: 2.5rem;
    --font-size-1: 2.25rem;
    --font-size-2: 2rem;
    --font-size-3: 1.75rem;
    --font-size-4: 1.375rem;
    --font-size-5: 1.25rem;
    --font-size-6: 1.125rem;
    --font-size-7: 1.063rem;
    --font-size-8: 1rem;
    --font-size-9: 0.938rem;
    --font-size-10: 1.875rem;

    --font-weight-0: 400;
    --font-weight-1: 500;
    --font-weight-2: 600;
    --font-weight-3: 700;
}

`;

export default GlobalStyle