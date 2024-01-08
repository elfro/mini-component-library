/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        '--height': '8px',
        '--borderRadius': '0.25rem',
    },
    medium: {
        '--height': '12px',
        '--borderRadius': '0.25rem',
    },
    large: {
        '--height': '24px',
        '--borderRadius': '0.5rem',
    }
};
const ProgressBar = ({ value, size }) => {
    const styles = SIZES[size];
    return (
      <Wrapper>
          <Label htmlFor="loading">{value}%</Label>
          <Progress
              id="loading"
              max="100"
              value={value}
              style={styles}
              aria-label='Progress bar: loading'
              aria-valuenow={value}
              aria-valuemin={0}
              aria-valuemax={100}
          />
      </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 500px;
    margin: 0;
`

const Label = styled.label`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${COLORS.black};
    text-transform: capitalize;
    width: 15%;
`;

const Progress = styled.progress`
    width: 370px;
    height: var(--height);
    vertical-align: middle;
    margin-left: 30px;
    border: 0;
    border-radius: var(--borderRadius);
    color: ${COLORS.primary};
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    
    &[value] {
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance: none;
    }

    &[value]::-webkit-progress-bar {
        border-radius: var(--borderRadius);
        color: ${COLORS.primary};
        background: ${COLORS.transparentGray15};
        box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    }
 
    &[value]::-webkit-progress-value {
        border-radius: var(--borderRadius) 0 0 var(--borderRadius);
        background: ${COLORS.primary};
    }

    &[value="100"]::-webkit-progress-value {
        border-radius: var(--borderRadius);
    }

    &[value]::-moz-progress-bar {
        border-radius: var(--borderRadius) 0 0 var(--borderRadius);
        background: ${COLORS.primary};
    }
`;

export default ProgressBar;
