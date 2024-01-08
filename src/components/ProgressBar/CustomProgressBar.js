/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        '--height': '8px',
        '--padding': '0',
        '--borderRadius': '4px',
    },
    medium: {
        '--height': '12px',
        '--padding': '0',
        '--borderRadius': '4px',
    },
    large: {
        '--height': '16px',
        '--padding': '4px',
        '--borderRadius': '8px',
    }
};
const CustomProgressBar = ({ value, size }) => {
    const styles = SIZES[size];
    return (
      <ProgressBar
          id="progressbar"
          role="progressbar"
          value={value}
          style={styles}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
      >
          <VisuallyHidden>{value}%</VisuallyHidden>
          <ProgressInputWrapper style={styles}>
            <ProgressInput value={value} style={styles}></ProgressInput>
          </ProgressInputWrapper>
      </ProgressBar>
    );
};

const ProgressBar = styled.div`
    width: 100%;
    padding: var(--padding);
    border-radius: var(--borderRadius);
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

const ProgressInputWrapper = styled.div`
    overflow: hidden;
    border-radius: var(--borderRadius);

`;
const ProgressInput = styled.div`
    width: ${props => props.value + '%'};
    height: var(--height);
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
    background: ${COLORS.primary};
`;
export default CustomProgressBar;
