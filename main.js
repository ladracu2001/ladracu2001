import { css } from 'lit-element';

export const mainStyles = css`
  html,
  body {
    height: 100%;
  }
  body {
    /* display: flex; */
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }
  /*Header*/
  .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.1);
    border: solid rgba(0, 0, 0, 0.15);
    border-width: 1px 0;
    box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
      inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
  }

  .form-control-dark {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: var(--bs-gray);
  }
  .form-control-dark:focus {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: #fff;
    box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
  }

  .bi {
    vertical-align: -0.125em;
    fill: currentColor;
  }

  .text-small {
    font-size: 85%;
  }

  .dropdown-toggle {
    outline: 0;
  }
`;
