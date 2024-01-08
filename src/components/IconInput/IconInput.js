import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        iconSize: 16,
        fontSize: '0.875rem',
        padding: 4,
    },
    large: {
        iconSize: 24,
        fontSize: '1.125rem',
        padding: 7,
    }
}
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
    const styles = SIZES[size];
  return (
      <Label>
          <VisuallyHidden>{label}</VisuallyHidden>
          <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
              <Icon id={icon} size={styles.iconSize}></Icon>
          </IconWrapper>

          <Input
              {...delegated}
              style = {{
                  '--width': width + 'px',
                  '--font-size': styles.fontSize,
                  '--padding-left': styles.iconSize + 'px',
                  '--padding': styles.padding + 'px'
              }}

          />
      </Label>
  )
};

const Label = styled.label`
    position: relative;
    color: ${COLORS.gray700};
    
    &:hover {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: var(--size);
    height: var(--size);
    color: inherit;
`;

const Input = styled.input`
    width: var(--width);
    padding: var(--padding);
    padding-left: calc(var(--padding-left) + 8px);

    color: inherit;
    font-family: 'Roboto', sans-serif;
    font-size: var(--font-size);
    font-weight: 700;
    
    border: none;
    border-bottom: 1px solid ${COLORS.black};

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }
`;

export default IconInput;
