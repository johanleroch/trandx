import React from 'react';

import styled from 'styled-components';

const COLORS = {
    BLACK: '#414056',
    DEFAULT: '#6C63FF'
};

const StyledButton = styled.button`
    font-weight: 700;
    font-size: 16px;
    background-color: ${props => props.theme === 'dark' ? COLORS.BLACK : COLORS.DEFAULT};
    color: white;
    border-radius: 30px;
    padding: 17px 44px;
    text-transform: capitalize;
    outline: none;
    transition: box-shadow .2s ease-in-out;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2) !important;
    z-index: 1;

    &:hover {
        box-shadow: 0px 13px 15px rgba(0, 0, 0, 0.25) !important;
    }

    &:active {
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2) !important;
    }

    &:hover, &:active, &:visited, &:focus {
        outline: none !important;
        box-shadow: none;
    }
`;

const Button = ({className, children, theme}) => (
  <StyledButton type="button" className={'btn ' + className} theme={theme}>{children}</StyledButton>
);

export { Button };
