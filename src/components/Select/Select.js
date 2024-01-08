import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
        <NativeSelector value={value} onChange={onChange}>
          {children}
        </NativeSelector>
        <VisibleSelector>
            {displayedValue}
            <CustomIcon id='chevron-down' size={24}></CustomIcon>
        </VisibleSelector>
      </Wrapper>

  );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const NativeSelector = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    appearance: none;
`;

const VisibleSelector =  styled.div`
    padding: 12px 52px 12px 16px;
    width: 100%;
    color: ${COLORS.gray700};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${COLORS.transparentGray15};
    border-radius: 0.5rem;
    border: unset;
    appearance: none;
    
    ${NativeSelector}:focus + & {
        outline: 1px dotted #212121;
        outline: 5px auto -webkit-focus-ring-color;
    }
    
    ${NativeSelector}:hover + & {
        color: ${COLORS.black};
    }
`;

const CustomIcon = styled(Icon)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    pointer-events: none;
`;

export default Select;
