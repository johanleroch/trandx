import React from 'react';
import styled from 'styled-components';

const StyledBadge = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 50px;
    color: #6CA8EE;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    font-size: 25px;
    line-height: 25px;
`;

const Badge = ({className, children, theme, iconClassName}) => (
  <StyledBadge className={className + " icon-badge d-flex justify-content-center align-items-center"} theme={theme}>
    <span className={iconClassName}></span>
  </StyledBadge>
);

export { Badge };
